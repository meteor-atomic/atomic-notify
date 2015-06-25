/**
 * Template Helpers
 */
Template.Notify.helpers({
  /**
   * Return the notifications from the collection
   * @return {Cursor}
   */
  notifications: function() {
    return Notify.collection.find({}, {limit: Notify.config("limit")});
  },

  /**
   * Return the total number of notificaitons
   * @return {Number}
   */
  size: function() {
    return Notify.collection.find().count()
  }
});
