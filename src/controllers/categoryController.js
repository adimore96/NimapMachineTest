const db = require('../db/connection');

exports.list = (req, res) => {
    db.query("SELECT * FROM category", (err, result) => {
        if (err) throw err;
        res.render('category/list', { categories: result });
    });
};

exports.create = (req, res) => {
    res.render('category/form', { category: {} });
};

exports.save = (req, res) => {
    const { name } = req.body;
    db.query("INSERT INTO category (name) VALUES (?)", [name], () => {
        res.redirect('/category');
    });
};

exports.edit = (req, res) => {
    db.query("SELECT * FROM category WHERE id = ?", [req.params.id], (err, result) => {
        res.render('category/form', { category: result[0] });
    });
};

exports.update = (req, res) => {
    const { name } = req.body;
    db.query("UPDATE category SET name=? WHERE id=?", [name, req.params.id], () => {
        res.redirect('/category');
    });
};

exports.delete = (req, res) => {
    db.query("DELETE FROM category WHERE id=?", [req.params.id], () => {
        res.redirect('/category');
    });
};
