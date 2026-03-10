const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const tutorialRoutes = require('./routes/tutorialRoutes');

const app = express();
const port = 3001;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由
app.use('/api', tutorialRoutes);

// 简单的测试路由
app.get('/', (req, res) => {
  res.json({ message: '欢迎使用 Node.js + PostgreSQL API' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});

// 同步数据库（可选，也可以在模型文件中单独同步）
sequelize.sync({ alter: true })  // alter: true 会更新表结构（谨慎使用）
  .then(() => {
    console.log('数据库同步完成');
  })
  .catch(err => {
    console.error('数据库同步失败:', err);
  });