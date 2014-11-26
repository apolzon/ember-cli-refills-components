'use strict';

module.exports = {
  name: 'ember-cli-refills-components',
  included: function(app) {
    this._super.included(app);
    app.import("vendor/images/menu-white.png");
  }
};
