module.exports = (sequelize, type) => {
    return sequelize.define('course', {
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
};