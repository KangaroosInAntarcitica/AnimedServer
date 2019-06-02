module.exports = (sequelize, type) => {
    return sequelize.define('accessToken', {
        token: {
            type: type.STRING,
            primaryKey: true,
            allowNull: false
        },
        userID: {
            type: type.INTEGER,
            allowNull: false
        },
        expires: {
            type: type.BIGINT,
            allowNull: false
        }
    })
};
