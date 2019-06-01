module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        userID: {
            type: type.INTEGER,
            allowNull: false
        },
        expires: {
            type: type.INTEGER,
            allowNull: false
        }
    })
};
