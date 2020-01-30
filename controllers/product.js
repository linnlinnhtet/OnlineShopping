const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const product = new Product(title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop', {
            pageTitle: 'Shop',
            path: '/',
            prods: cb
        });
    });

}