import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
