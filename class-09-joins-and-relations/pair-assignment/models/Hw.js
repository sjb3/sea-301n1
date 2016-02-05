'use strict';

module.exports = function(sequelize, DataTypes){

  var Hw = sequelize.define('Hw',{
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      author: DataTypes.STRING,
      authorUrl: DataTypes.STRING,
      publishedOn: DataTypes.DATE,
      body: DataTypes.TEXT
      });

  return Hw;

};
