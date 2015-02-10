import CIOMixin from '../mixin/cio-mixin';

export default {
  name: 'customerio',
  initialize: function(container, application) {
    application.register('cio:main', Ember.Object.extend(CIOMixin));
    application.inject('controller', 'cio', 'cio:main')
    application.inject('route', 'cio', 'cio:main')
    application.inject('view', 'cio', 'cio:main')
  }
};
