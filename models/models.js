const Sequelize = require('sequelize');

const connection = require('./connection.json');
// const DISABLE_SEQUELIZE_DEFAULTS = {
//     timestamps: false,
//     freezeTableName: true,
// };

const sequelize = new Sequelize(connection);

User = require("./user")(sequelize, Sequelize);
AccessToken = require("./accessToken")(sequelize, Sequelize);

User.hasMany(AccessToken, {foreignKey: "userID"});

sequelize.sync();

module.exports = {User, AccessToken};
