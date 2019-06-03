module.exports = (sequelize, type) => {
    return sequelize.define('sectionArticle', {
        sectionId: {
            type: type.INTEGER,
            allowNull: false
        },
        articleId: {
            type: type.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        indexes: [{unique: true, fields: ['sectionId', 'articleId']}]
    })
};