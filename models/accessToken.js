module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        userID: {
            type: type.INTEGER,
        //    TODO foreign key
        },
        expires: {
            type: type.INTEGER,
            allowNull: false
        }
    })
};
