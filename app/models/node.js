import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  relatedModels: DS.hasMany('relatedModel', {async:true}),
});
