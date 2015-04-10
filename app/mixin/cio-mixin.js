var warn = Ember.Logger.warn;

var computed = Ember.computed;

var CIOMixin = Ember.Mixin.create({
  _cio: computed(function() {
    return window._cio || function(){
        function cioWarn(){
          warn("Customer.io was not imported correctly. Please check your configuration.");
        }

        return {
          identify: function() {
            ciowarn()
          },
          track: function(){
            ciowarn()
          }
        };
    }
  }),

  identify: function(userInfo) {
    this.get('_cio').identify(userInfo);
  },

  track: function(eventName, eventData) {
    this.get('_cio').track(eventName, eventData);
  }
});

export default CIOMixin;
