/**
 * Notify
 * @description Show notifications on the client
 */

/**
 * Notify namespace
 *
 * @todo Add options and configuration
 * @todo Add fade out t ime limits
 *
 * @type {Object}
 */
Notify = {};

/**
 * Extend the Notify namespace with core methods
 */
_.extend(Notify, {
  /**
   * Notifications collection
   *
   * @todo This seems to be a little OTT using a collection
   *       but I hope that in the future this will be live
   *       and we can capture the errors in an administration
   *       interface.
   * @type {Collection}
   */
  collection: new Meteor.Collection(null),

  /**
   * Configuration settings
   *
   * @param {Number} timeout  milliseconds until notifcation fades.
   * @param {Number} limit    maximum number of stacked notifications.
   * @type {Object}
   */
  _config: new ReactiveDict("config"),

  /**
   * set/get a configuration setting reactivley.
   * @param  {String} key   Configuration key
   * @param  {*}      value Mixed value (Optional)
   * @return {*}            Returns the vlaue from the config
   */
  config: function(key, value) {
    if(value)
      return this._config.set(key, value)

    return this._config.get(key);
  },

  /**
   * Generic add method used to create all types of
   * notifications.
   * @param {String} type    Notification types.
   * @param {String} message Notification Message.
   */
  add: function(type, message, options) {
    /**
     * Insert the notification into the queue
     */
    return Notify.collection.insert(_.extend({
      type:     type,
      message:  message
    }, options));
  },

  /**
   * Extracts information out of an Error/Meteor.Error
   * instance and generates a generic error bar message.
   *
   * @param  {Error} exception Error object
   */
  exception: function(error, options) {
    return Notify.error(error.reason || error.message, options);
  },

  /**
   * Display a error message
   * @param  {String} message     Error message.
   */
  error: function(message, options) {
    return Notify.add('error', message, options);
  },

  /**
   * Display a warning message.
   * @param  {String}   message     Message.
   */
  warning: function(message, options) {
    return Notify.add('warning', message, options);
  },

  /**
   * Display a success message
   * @param  {String}   message     Message.
   */
  success: function(message, options) {
    return Notify.add('success', message, options);
  },

  /**
   * Dismis an error message
   * @param  {String} id Mongo id used to identify the
   *                     notification
   */
  dismiss: function(id) {
    /**
     * Change the visibilty of the notification
     * @type {[type]}
     */
    Notify.collection.remove({_id: id});
  },

  /**
   * Dismis all notifications
   */
  dismissAll: function() {
    Notify.collection.remove();
  }
});

/**
 * Initially set the configuration
 */
Notify.config("timeout",  5000);
Notify.config("limit",    3);
