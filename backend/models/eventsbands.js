'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventsBands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventsBands.belongsTo(models.Event, { foreignKey: 'event_id' });
      EventsBands.belongsTo(models.Band, { foreignKey: 'band_id' });
    }
  }
  EventsBands.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventsBands',
  });
  return EventsBands;
};