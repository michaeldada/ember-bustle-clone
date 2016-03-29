import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(story) {
      if (confirm('Are you sure you want to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    },
  update(story, params) {
    this.sendAction('update', story, params);
    }
  }
});
