module.exports = (sequelize, type) => {
    return sequelize.define('accessToken', {
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
