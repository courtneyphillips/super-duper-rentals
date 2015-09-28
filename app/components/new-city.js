import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    cityFormHide() {
      this.set('addNewCity', false);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country')
      };
      this.sendAction('saveCity', params);
      this.set('addNewCity', false);
    }
  }
});
