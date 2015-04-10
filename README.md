[![Build Status](https://travis-ci.org/alvincrespo/ember-cli-customerio.svg)](https://travis-ci.org/alvincrespo/ember-cli-customerio)

## Ember CLI implementation for Customer.io

### Installation
`ember install:addon ember-cli-customerio`

Once the addon is installed you must then include it in your HTML
(preferably right before the opening body tag and closing `<head>` tag):

`{{content-for 'customerio'}}`

Reference:
https://github.com/alvincrespo/ember-cli-customerio/blob/master/tests/dummy/app/index.html#L24

### Usage

Identifiying and tracking users are available on controllers, routes and
views. You can easily call these by doing:

`this.cio.identify({ })`

`this.cio.track('someEventName', {})`

### Configuration

In your environment configuration ensure that you set the site-id and
api-key for the CIO object:

```
    cio: {
      'site-id': '',
      'api-key': ''
    }
```
Reference:
https://github.com/alvincrespo/ember-cli-customerio/blob/master/tests/dummy/config/environment.js#L21-L24
