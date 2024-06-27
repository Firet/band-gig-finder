'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventsVenues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventsVenues.belongsTo(models.Event, { foreignKey: 'event_id' });
      EventsVenues.belongsTo(models.Venue, { foreignKey: 'venue_id' });
    }
  }
  EventsVenues.init({
    event_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventsVenues',
  });
  return EventsVenues;
};