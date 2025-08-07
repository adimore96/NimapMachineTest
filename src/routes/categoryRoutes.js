const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.list);
router.get('/create', categoryController.create);
router.post('/create', categoryController.save);
router.get('/edit/:id', categoryController.edit);
router.post('/edit/:id', categoryController.update);
router.get('/delete/:id', categoryController.delete);

module.exports = router;
