module.exports = (sequelize, type) => {
    return sequelize.define('accessToken', {
        expires: {
            type: type.INTEGER,
            allowNull: false
        }
    })
};
