module.exports = function(app) {
  var express = require('express');
  var relatedModelsRouter = express.Router();

  relatedModelsRouter.get('/', function(req, res) {
    res.send({
      'relatedModels': [
        { id: 300, name: 'name_1', },
        { id: 301, name: 'name_2', },
      ]
    });
  });

  relatedModelsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  relatedModelsRouter.get('/:id', function(req, res) {
    res.send({
      'relatedModels': {
        id: req.params.id,
        name: 'name_' + req.params.id,
      }
    });
  });

  relatedModelsRouter.put('/:id', function(req, res) {
    res.send({
      'relatedodels': {
        id: req.params.id,
        name: 'related-name-' + req.params.id
      }
    });
  });

  relatedModelsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/relatedModels', relatedModelsRouter);
};
