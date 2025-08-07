const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const categoryRoutes = require('./src/routes/categoryRoutes');
const productRoutes = require('./src/routes/productRoutes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
