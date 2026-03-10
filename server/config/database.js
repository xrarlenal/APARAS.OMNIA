const { Sequelize } = require('sequelize');

// 创建 Sequelize 实例
const sequelize = new Sequelize('数据库名', '用户名', '密码', {
  host: 'localhost',
  dialect: 'postgres',  // 指定数据库类型
  port: 5432,           // PostgreSQL 默认端口
  logging: false,       // 关闭 SQL 日志（开发时可以开启）
  pool: {
    max: 5,             // 连接池最大连接数
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// 测试数据库连接
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL 连接成功!');
  } catch (error) {
    console.error('连接失败:', error);
  }
};

testConnection();

module.exports = sequelize;