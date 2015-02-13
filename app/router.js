import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("nodes", {path: '/'}, function() {
  });
  this.resource('node', {path: 'nodes/:node_id'});
});

export default Router;
