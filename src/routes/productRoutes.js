const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/create', productController.create); 
router.post('/create', productController.save);  

router.get('/edit/:id', productController.edit);   
router.post('/edit/:id', productController.update);  
router.get('/delete/:id', productController.delete); 

module.exports = router;