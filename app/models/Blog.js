'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // define association here 
    static associate({ Comments }) {
      this.hasMany(Comments, { foreignKey: 'article_id', as: 'commentsData' })
    }
    
    
  }
  Blog.init(
    {
      title: { type:  DataTypes.STRING },
      body: { type:  DataTypes.STRING },
      is_active: { type:  DataTypes.INTEGER },
      createdby: { type:  DataTypes.INTEGER },
      updatedby: { type:  DataTypes.INTEGER },
     
    },
    {
      sequelize,
      tableName: 'blogs',
      modelName: 'Blog',
    }
  )
  return Blog
}
