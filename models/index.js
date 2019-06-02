const Sequelize = require('sequelize');
const connection = require('./connection.json');

const sequelize = new Sequelize(connection);

User = require("./user")(sequelize, Sequelize);
AccessToken = require("./accessToken")(sequelize, Sequelize);
Course = require("./course")(sequelize, Sequelize);
Section = require("./section")(sequelize, Sequelize);
Article  = require("./article")(sequelize, Sequelize);
UserCourse = require("./userCourse")(sequelize, Sequelize);
UserArticle = require("./userArticle")(sequelize, Sequelize);
SectionArticle = require("./sectionArticle")(sequelize, Sequelize);


// one-to-many association between user and access tokens
User.hasMany(AccessToken, {foreignKey: "userId"});

// many-to-many association between users and courses
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

// many-to-many association between users and articles
User.belongsToMany(Article, {
    through: {
        model: UserArticle
    },
    foreignKey: "userId"
});

Article.belongsToMany(User, {
    through: {
        model: UserArticle
    },
    foreignKey: "articleId"
});

// author relationship between course, article  and user
User.hasMany(Course, {foreignKey: "authorId"});
User.hasMany(Article, {foreignKey: "authorId"});

// many-to-many relationship between section and article

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


sequelize.sync();

module.exports = {User, AccessToken};