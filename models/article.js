module.exports = (sequelize, type) => {
    return sequelize.define('article', {
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        content: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
};