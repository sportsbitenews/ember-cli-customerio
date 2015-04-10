/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-customerio',
  contentFor: function(type, config) {
    if (type == 'customerio') {
      return '<script type="text/javascript">var _cio=_cio||[];(function(){var e,t,n;e=function(e){return function(){_cio.push([e].concat(Array.prototype.slice.call(arguments,0)))}};t=["load","identify","sidentify","track","page"];for(n=0;n<t.length;n++){_cio[t[n]]=e(t[n])}var r=document.createElement("script"),i=document.getElementsByTagName("script")[0];r.async=true;r.id="cio-tracker";r.setAttribute("data-site-id", "' + config.cio['site-id'] + '");r.src="https://assets.customer.io/assets/track.js";i.parentNode.insertBefore(r,i)})()</script>';
    }
  }
};
