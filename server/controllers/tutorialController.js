const Tutorial = require('../models/Tutorial');

// 创建教程
exports.create = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: '标题不能为空' });
    }

    const tutorial = await Tutorial.create({
      title,
      description,
      published: false
    });

    res.status(201).json(tutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取所有教程
exports.findAll = async (req, res) => {
  try {
    const tutorials = await Tutorial.findAll();
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 根据 ID 获取单个教程
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorial = await Tutorial.findByPk(id);
    
    if (!tutorial) {
      return res.status(404).json({ message: '教程不存在' });
    }
    
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 更新教程
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, published } = req.body;
    
    const tutorial = await Tutorial.findByPk(id);
    if (!tutorial) {
      return res.status(404).json({ message: '教程不存在' });
    }
    
    await tutorial.update({
      title: title || tutorial.title,
      description: description || tutorial.description,
      published: published !== undefined ? published : tutorial.published
    });
    
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 删除教程
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tutorial.destroy({ where: { id } });
    
    if (deleted === 0) {
      return res.status(404).json({ message: '教程不存在' });
    }
    
    res.json({ message: '删除成功' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 搜索教程（根据标题）
exports.searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const tutorials = await Tutorial.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%`  // 模糊搜索，不区分大小写
        }
      }
    });
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};