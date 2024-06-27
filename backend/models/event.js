'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User, { foreignKey: 'user_id' });
      Event.belongsToMany(models.Band, { through: 'EventsBands', foreignKey: 'event_id' });
      Event.belongsToMany(models.Venue, { through: 'EventsVenues', foreignKey: 'event_id' });
    }
  }
  Event.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    event_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};