const Sequelize = require('sequelize');

const connection = require('./connection.json');
const DISABLE_SEQUELIZE_DEFAULTS = {
    timestamps: false,
    freezeTableName: true,
};

const sequelize = new Sequelize(connection);

User = require("./user");
AccessToken = require("./accessToken");

User.hasMany(AccessToken, {foreignKey: "userID"});

module.exports = { sequelize, Sequelize };
