'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BandMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BandMembership.belongsTo(models.Artist, { foreignKey: 'artist_id' });
      BandMembership.belongsTo(models.Band, { foreignKey: 'band_id' });
    }
  }
  BandMembership.init({
    artist_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BandMembership',
  });
  return BandMembership;
};