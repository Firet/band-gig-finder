'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.belongsTo(models.User, { foreignKey: 'user_id' });
      Artist.hasMany(models.BandMembership, { foreignKey: 'artist_id' });
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};