import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  delete(rental) {
    rental.destroyRecord();
    this.transitionTo('index');
  }
});
