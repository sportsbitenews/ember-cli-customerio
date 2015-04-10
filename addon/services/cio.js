import Ember from 'ember';

var warn = Ember.Logger.warn;

export default Ember.Service.extend({
  _cio: (function() {
    return window._cio || function(){
        function ciowarn(){
          warn("Customer.io was not imported correctly. Please check your configuration.");
        }
        return {
          identify: function() {
            ciowarn();
          },
          track: function(){
            ciowarn();
          }
        };
    };
  }()),

  identify: function(userInfo) {
    this._cio.identify(userInfo);
  },

  track: function(eventName, eventData) {
    this.request.track(eventName, eventData);
  }
});
