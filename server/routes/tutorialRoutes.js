const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorialController');

// 定义 CRUD 路由
router.post('/tutorials', tutorialController.create);
router.get('/tutorials', tutorialController.findAll);
router.get('/tutorials/search', tutorialController.searchByTitle);
router.get('/tutorials/:id', tutorialController.findOne);
router.put('/tutorials/:id', tutorialController.update);
router.delete('/tutorials/:id', tutorialController.delete);

module.exports = router;