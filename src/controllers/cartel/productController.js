import * as productModel from '../../models/mongoModels/cartel/productModel.js';

module.exports = (app) => {
    /*
        GET BY FORMAT
    */
    app.get('/cartel/products/format/:format', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const format = req.params.format;

        productModel.getAllProducts(function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                let returnedProducts = [];
                // For Each Product Returned
                 for (let prod in docs) {
                    if (docs.hasOwnProperty(prod)) {
                        // For Each Variant In Product
                        for (let variant in docs[prod].variants) {
                            if (docs[prod].variants.hasOwnProperty(variant)) {
                                if (docs[prod].variants[variant].type.toLowerCase() == format) {
                                    returnedProducts.push(docs[prod]);
                                }
                            }
                        }
                    }
                 }
                res.status(200).send(returnedProducts);
            }
        });
    });

    /*
        GET BY GENRE
    */
    app.get('/cartel/products/genre/:genre', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const genre = req.params.genre;

        productModel.getAllProducts(function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                let returnedProducts = [];
                // For Each Product Returned
                 for (let prod in docs) {
                    if (docs.hasOwnProperty(prod)) {
                        if (docs[prod].details.genre == genre) {
                            returnedProducts.push(docs[prod]);
                        }
                    }
                 }
                res.status(200).send(returnedProducts);
            }
        });
    });

    /*
        GET BY PRODUCT ID
    */
    app.get('/cartel/products/id/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        let value = req.params.id,
            param = 'id';
        productModel.getProductsByParam(param, value, function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    /*
        GET ALL PRODUCTS
    */
    app.get('/cartel/products/', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        productModel.getAllProducts(function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });
}