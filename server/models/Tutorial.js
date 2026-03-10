const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// 定义 Tutorial 模型
const Tutorial = sequelize.define('Tutorial', {
  // 定义模型属性
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  // 表名：使用复数形式
  tableName: 'tutorials',
  // 自动添加 createdAt 和 updatedAt 字段
  timestamps: true
});

// 同步数据库（创建表）
// force: true 会删除已存在的表（开发环境用，生产环境慎用！）
Tutorial.sync({ force: false })
  .then(() => console.log('Tutorial 表已同步'))
  .catch(err => console.error('同步失败:', err));

module.exports = Tutorial;