/**
 * Created template
 */
Template.NotifyNotification.created = function(e, template) {
  var id = this.data._id;

  /**
   * Setup a close timer
   */
  if(!this.data.sticky) {
    this._timer = setTimeout(function(){
      /**
       * Close the Notificaiton
       */
      Notify.dismiss(id);

    }, Notify.config("timeout") || 5000);
  }
}

/**
 * When a notification is rendered
 */
Template.NotifyNotification.rendered = function(e, template){

  // IS the client using the semantic package
  var isSemantic = "semantic:ui-css" in (Package || {});

  // if(isSemantic)
    // Convert teh UI to the semtantic ui styles
    // this.$(".close").addClass("ui close icon").val("")
}

/**
 * Helpers
 */
Template.NotifyNotification.helpers({
  /**
   * Return the notification identifer
   * @return {String} Mongo Identifer
   */
  id: function() {
    return this._id
  }
})

/**
 * Events
 */
Template.NotifyNotification.events({
  "click .close": function(e, template) {
    // As we have an active timeout that will trigger
    // in the future, we can remove that so it will
    // not try to remove the notification after it's
    // been removed
    clearTimeout(template._timer);

    // dismiss the notification
    Notify.dismiss(this._id);
  }
})
