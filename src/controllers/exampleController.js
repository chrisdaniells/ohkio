import * as exampleModel from '../models/mongoModels/exampleModel.js';

module.exports = (app) => {
    app.post('/example', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        exampleModel.examplePost();
    });

    app.get('/example/title/:title', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        let value = req.params.title,
            param = 'title';
        exampleModel.exampleGetByParam(param, value, function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    app.get('/example', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        exampleModel.exampleGet(function(err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(docs);
            }
        });
    });

    app.delete('/example/id/:id', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        let id = req.params.id;
        exampleModel.exampleDelete(req, res, id);
    });
}