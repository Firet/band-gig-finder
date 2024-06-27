'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Band.belongsTo(models.User, { foreignKey: 'user_id' });
      Band.hasMany(models.BandMembership, { foreignKey: 'band_id' });
      Band.belongsToMany(models.Event, { through: 'EventsBands', foreignKey: 'band_id' });
    }
  }
  Band.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};