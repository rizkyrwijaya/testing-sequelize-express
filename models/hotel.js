'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Room, {
        foreignKey: {
          name: 'hotel_id'
        }
      })
    }
  };
  Hotel.init({
    hotel_name: DataTypes.STRING,
    address: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};