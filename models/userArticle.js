module.exports = (sequelize, type) => {
    return sequelize.define('userArticle', {
        userId: {
            type: type.INTEGER,
            allowNull: false
        },
        articleId: {
            type: type.INTEGER,
            allowNull: false
        },
        rating: {
            type: type.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        comment: {
            type: type.STRING
        },
        completed: {
            type: type.BOOLEAN
        }
    }, {
        timestamps: false,
        indexes: [{unique: true, fields: ['userId', 'articleId']}]
    })
};