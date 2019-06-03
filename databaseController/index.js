const {
    User, AccessToken, Course, Section,
    Article, UserCourse, UserArticle, SectionArticle, Sequelize
} = require("../models");

const {parseArticleInfo, parseCourseInfo, parseSectionInfo} = require("./parsers");

const userController = {
    saveToken: async (accessToken, userId, expires) => {
        expires = expires.getTime();
        return await AccessToken.create({userId, token: accessToken, expires});
    },

    getUserIdFromToken: async (accessToken) => {
        const token = await AccessToken.findOne({where: {token: accessToken}});
        return token && token.dataValues.userId;
    },

    addUser: async (username, password, name) => {
        try {
            return await User.create({username, password, name})
        } catch (e) {
            return null;
        }
    },

    getUserFromCredentials: async (username, password) => {
        const user = await User.findOne({where: {username, password}});
        return user && user.dataValues;
    },

    getUserInfo: async (username) => {
        const user = await User.findOne({where: {username}});
        return user.dataValues;
    },

    getUserInfoById: async (id) => {
        const user = await User.findOne({where: {id}});
        if (!user) return null;
        let {name, username} = user.dataValues;
        return {name, username};
    },

    userExists: async (username) => {
        const user = await User.findOne({where: {username}});
        return !!user
    }
};

const articleController = {
    getInfo: async (articleId, userId) => {
        const article = await Article.findOne({
            where: {id: articleId},
            attributes: ["id", "name", "content"],
            include: [{
                model: UserArticle,
                attributes: ["rating", "completed", "isAuthor"],
                where: {[Sequelize.Op.or]: [{isAuthor: true, userId}]},
                include: [{model: User, attributes: ["name", "username"]}],
                required: false
            }]
        });

        return article && parseArticleInfo(article.toJSON());
    },

    setArticleFeedback: async (articleId, userId, feedback) => {
        try {
            await UserArticle.findOrCreate({where: {userId, articleId}});
            const userArticle = await UserArticle.findOne({where: {userId, articleId}});
            if (userArticle.toJSON().isAuthor) {
                return null;
            }

            const {completed, rating, comment} = feedback;
            await UserArticle.update({completed, rating, comment},
                {fields: ["completed", "rating", "comment"], where: {articleId, userId}});
            return {completed, rating, comment, articleId};
        } catch (e) {
            return null;
        }
    },

    addArticle: async (userId, name, content) => {
        try {
            let article = await Article.create({name, content});
            article = article.toJSON();
            const userArticle = await UserArticle.create({isAuthor: true, userId, articleId: article.id});

            const author = await userController.getUserInfoById(userId);
            return {...article, author};
        } catch (e) {
            return null;
        }
    }
};

const courseController = {
    getInfo: async (courseId, userId) => {
        const course = await Course.findOne({
            where: {id: courseId},
            attributes: ["id", "name", "description"],
            include: [
                {
                    model: UserCourse,
                    attributes: ["rating", "isAuthor"],
                    where: {[Sequelize.Op.or]: [{isAuthor: true, userId}]},
                    include: [{model: User, attributes: ["name", "username"]}],
                    required: false
                }
            ]
        });
        if (!course) return null;
        const courseInfo = parseCourseInfo(course.toJSON());

        const articleInclude = {
            model: Article, attributes: ["id", "name"], include: [
                {
                    model: UserArticle,
                    attributes: ["rating", "completed", "isAuthor"],
                    where: {[Sequelize.Op.or]: [{isAuthor: true, userId}]},
                    include: [{model: User, attributes: ["name", "username"]}],
                    required: false
                }
            ]
        };

        let sections = await Section.findAll({
            attributes: ["id", "name", "description"],
            include: [{
                model: SectionArticle,
                include: [articleInclude]
            }],
            where: {courseId}
        });

        const sectionInfos = sections.map(section => parseSectionInfo(section.toJSON()));
        return {...courseInfo, sections: sectionInfos};
    },

    addCourse: async (name, description, userId) => {
        try {
            let course = await Course.create({name, description});
            course = course.toJSON();
            const userCourse = await UserCourse.create({isAuthor: true, userId, courseId: course.id});

            const author = await userController.getUserInfoById(userId);
            return {...course, author};
        } catch (e) {
            return null;
        }
    },

    setCourseFeedback: async (courseId, userId, feedback) => {
        try {
            await UserCourse.findOrCreate({where: {userId, courseId}});
            const userCourse = await UserCourse.findOne({where: {userId, courseId}});
            if (userCourse.toJSON().isAuthor) {
                return null;
            }

            const {comment, rating} = feedback;
            await UserCourse.update({rating, comment},
                {fields: ["rating", "comment"], where: {courseId, userId}});
            return {comment, rating, courseId};
        } catch (e) {
            return null;
        }
    },

    addSection: async (courseId, name, description) => {
        try {
            const section = await Section.create({name, description, courseId});
            const {courseId: _, ...sectionInfo} = section.toJSON();
            return sectionInfo;
        } catch (e) {
            return null;
        }
    },

    addArticleToSection: async (sectionId, articleId) => {
        try {
            let sectionArticle = await SectionArticle.create({sectionId, articleId});
            sectionArticle = sectionArticle.toJSON();
            return sectionArticle;
        } catch(e) {
            return null;
        }
    },

    checkAuthor: async (courseId, authorId) => {
        const course = await UserCourse.findOne({where: {courseId, userId: authorId}, attributes: ["isAuthor"]});
        return course && course.toJSON().isAuthor;
    },

    checkSectionAuthor: async (sectionId, authorId) => {
        let section = await Section.findOne({where: {id: sectionId}});
        if (!section) return false;
        section = section.toJSON();
        return courseController.checkAuthor(section.courseId, authorId);
    },
    linkArticle: async (sectionId, articleId) => {
        try {
            const sectionArticle = await SectionArticle.create({sectionId, articleId});
            return true;
        }catch(e){
            return null;
        }
    }
};

const listController = {
    getAllCourses: async (search) => {
        const params = {
            limit: 20,
            attributes: ["id", "name"]
        };
        if (search) {
            params.where = {name: {
                [Sequelize.Op.like]: '%' + search + '%'}
            };
        }

        const courses = await Course.findAll(params);

        return courses.map(course => course.toJSON());
    },

    getAllArticles: async (search) => {
        const params = {
            limit: 100,
            attributes: ["id", "name"]
        };
        if (search) {
            params.where = {name: {
                    [Sequelize.Op.like]: '%' + search + '%'}
            };
        }

        const articles = await Article.findAll(params);

        return articles.map(article => article.toJSON());
    }
};

module.exports = {
    userController,
    articleController,
    courseController,
    listController
};