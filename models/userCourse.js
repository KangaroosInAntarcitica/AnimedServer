module.exports = (sequelize, type) => {
    return sequelize.define('userCourse', {
        userId: {
            type: type.INTEGER,
            allowNull: false
        },
        courseId: {
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
        isAuthor: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: false,
        indexes: [{unique: true, fields: ['userId', 'courseId']}]
    })
};