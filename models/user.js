module.exports = (sequelize, type) => {
  return sequelize.define('user', {
      username: {
          type: type.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: type.STRING,
          allowNull: false
      },
      name: {
          type: type.STRING,
          allowNull: false
      }
  }, {
      timestamps: false
  })
};