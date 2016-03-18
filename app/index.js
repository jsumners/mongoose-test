'use strict';

const mongoose = require('mongoose');
const Plugin = require('plugin');

const connection = mongoose.connect('mongodb://localhost/foo');
const plugin = new Plugin(connection);

plugin
  .works()
  .then((res) => console.log('works: %j', res))
  .then(() => {
    plugin.fails()
      .then((res) => console.log('fails: %j', res))
      .catch(console.error)
      .then(connection.disconnect);
  });



