const Sequelize = require('sequelize');
const connection = require('./connection.json');

const sequelize = new Sequelize(connection);

const User = require("./user")(sequelize, Sequelize);
const AccessToken = require("./accessToken")(sequelize, Sequelize);
const Course = require("./course")(sequelize, Sequelize);
const Section = require("./section")(sequelize, Sequelize);
const Article = require("./article")(sequelize, Sequelize);
const UserCourse = require("./userCourse")(sequelize, Sequelize);
const UserArticle = require("./userArticle")(sequelize, Sequelize);
const SectionArticle = require("./sectionArticle")(sequelize, Sequelize);


// one-to-many association between user and access tokens
User.hasMany(AccessToken, {foreignKey: "userId"});
AccessToken.belongsTo(User);

// many-to-many association between users and courses
User.belongsToMany(Course, {
    through: {
        model: UserCourse
    },
    foreignKey: "userId"
});

// Course.belongsToMany(User, {
//     through: {
//         model: UserCourse
//     },
//     foreignKey: "courseId"
// });

// many-to-many association between users and articles
User.belongsToMany(Article, {
    through: {
        model: UserArticle
    },
    foreignKey: "userId"
});

User.hasMany(UserArticle, {foreignKey: "userId"});
Article.hasMany(UserArticle, {foreignKey: "articleId"});
UserArticle.belongsTo(User, {foreignKey: "userId"});
UserArticle.belongsTo(Article, {foreignKey: "articleId"});

Article.belongsToMany(User, {
    through: {
        model: UserArticle
    },
    foreignKey: "articleId"
});
// Article.hasMany(UserArticle, {
//     foreignKey: "articleId"
// });

// author relationship between course, article  and user
User.hasMany(Course, {foreignKey: "authorId"});
Course.belongsTo(User, {foreignKey: "authorId"});

User.hasMany(Article, {foreignKey: "authorId"});
Article.belongsTo(User, {foreignKey: "authorId"});


// many-to-one relationship between course and section
Course.hasMany(Section, {foreignKey: "courseId"});
Section.belongsTo(Course, {foreignKey: "courseId"});
Section.belongsTo(Article, {foreignKey: "courseId"});

// many-to-many relationship between section and article.js

Section.belongsToMany(Article, {
    through: {
        model: SectionArticle
    },
    foreignKey: "sectionId"
});

Article.belongsToMany(Section, {
    through: {
        model: SectionArticle
    },
    foreignKey: "articleId"
});

Section.hasMany(SectionArticle, {foreignKey: "sectionId"});
SectionArticle.belongsTo(Section, {foreignKey: "sectionId"});
SectionArticle.belongsTo(Article, {foreignKey: "articleId"});
Article.hasMany(SectionArticle, {foreignKey: "articleId"});

User.hasMany(UserCourse, {foreignKey: "userId"});
UserCourse.belongsTo(User, {foreignKey: "userId"});
UserCourse.belongsTo(Course, {foreignKey: "courseId"});
Course.hasMany(UserCourse, {foreignKey: "courseId"});

User.belongsToMany(Course, {
    through: {
        model: UserCourse
    },
    foreignKey: "userId"
});

Course.belongsToMany(User, {
    through: {
        model: UserCourse
    },
    foreignKey: "courseId"
});


sequelize.sync();

module.exports = {
    User, AccessToken, Course, Section,
    Article, UserCourse, UserArticle, SectionArticle,
    Sequelize
};