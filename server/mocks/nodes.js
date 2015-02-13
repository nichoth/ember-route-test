module.exports = function(app) {
  var express = require('express');
  var nodeRouter = express.Router();

  nodeRouter.get('/', function(req, res) {
    res.send({
      'nodes': [
        { type: 'node', id: '1', name: "sphinx", relatedModels: ['300']},
        { type: 'node', id: '2', name: "hydra", relatedModels: ['300']},
        { type: 'node', id: '3', name: "huldra", relatedModels: ['300']},
        { type: 'node', id: '4', name: "cyclops", relatedModels: ['300']},
        { type: 'node', id: '5', name: "fenrir", relatedModels: ['300']},
        { type: 'node', id: '6', name: "medusa", relatedModels: ['300']},
      ]
    });
  });

  nodeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  nodeRouter.get('/:id', function(req, res) {
    res.send({
      'nodes': {
        id: req.params.id,
        type: 'node',
        name: 'sphinx_' + req.params.id,
        relatedModels: ['300'],
      }
    });
  });

  nodeRouter.put('/:id', function(req, res) {
    res.send({
      'nodes': {
        id: req.params.id
      }
    });
  });

  nodeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/nodes', nodeRouter);
};
