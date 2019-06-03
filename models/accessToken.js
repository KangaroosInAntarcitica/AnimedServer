module.exports = (sequelize, type) => {
    return sequelize.define('accessToken', {
        token: {
            type: type.STRING,
            allowNull: false
        },
        expires: {
            type: type.BIGINT,
            allowNull: false
        }
    })
};
