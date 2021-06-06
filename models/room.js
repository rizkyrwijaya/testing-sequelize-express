'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Hotel, 
        {
          foreignKey: "hotel_id"
        });
        
      this.belongsToMany(models.User, {
        through: 'userRoom',
        foreignKey: 'room_id'
      })
    }
  };
  Room.init({
    hotel_id: DataTypes.INTEGER,
    room_number: DataTypes.STRING,
    room_type: DataTypes.INTEGER,
    max_people: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};