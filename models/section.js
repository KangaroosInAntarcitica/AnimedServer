module.exports = (sequelize, type) => {
    return sequelize.define('section', {
        name: {
            type: type.STRING,
            allowNull: false,
        },
        description: {
            type: type.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
};