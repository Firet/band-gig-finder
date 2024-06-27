'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasMany(models.Event, { foreignKey: 'user_id' });
      User.hasMany(models.Artist, { foreignKey: 'user_id' });
      User.hasMany(models.Band, { foreignKey: 'user_id' });
      User.hasMany(models.Venue, { foreignKey: 'user_id' });
      User.belongsToMany(models.Role, { through: 'RoleMembership', foreignKey: 'user_id' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    reset_password_code: DataTypes.STRING,
    reset_password_expiry: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};