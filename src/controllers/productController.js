const db = require('../db/connection');

exports.list = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const countQuery = "SELECT COUNT(*) as count FROM product";
    const dataQuery = `
        SELECT p.id as ProductId, p.name as ProductName, 
               c.id as CategoryId, c.name as CategoryName
        FROM product p
        LEFT JOIN category c ON p.category_id = c.id
        LIMIT ? OFFSET ?`;

    db.query(countQuery, (err, countResult) => {
        if (err) throw err;
        const total = countResult[0].count;
        const totalPages = Math.ceil(total / limit);

        db.query(dataQuery, [limit, offset], (err, dataResult) => {
            if (err) throw err;
            res.render('product/list', {
                products: dataResult,
                currentPage: page,
                totalPages
            });
        });
    });
};

exports.create = (req, res) => {
    db.query("SELECT * FROM category", (err, categories) => {
        res.render('product/form', { product: {}, categories });
    });
};

exports.save = (req, res) => {
    const { name, category_id } = req.body;
    db.query("INSERT INTO product (name, category_id) VALUES (?, ?)", [name, category_id], (err) => {
        if (err) throw err;
        res.redirect('/product');
    });
};

exports.edit = (req, res) => {
    db.query("SELECT * FROM product WHERE id=?", [req.params.id], (err, result) => {
        const product = result[0];
        db.query("SELECT * FROM category", (err, categories) => {
            res.render('product/form', { product, categories });
        });
    });
};

exports.update = (req, res) => {
    const { name, category_id } = req.body;
    db.query("UPDATE product SET name=?, category_id=? WHERE id=?", [name, category_id, req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/product');
    });
};

exports.delete = (req, res) => {
    db.query("DELETE FROM product WHERE id=?", [req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/product');
    });
};

