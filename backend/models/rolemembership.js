'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoleMembership.belongsTo(models.User, { foreignKey: 'user_id' });
      RoleMembership.belongsTo(models.Role, { foreignKey: 'role_id' });
    }
  }
  RoleMembership.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoleMembership',
  });
  return RoleMembership;
};