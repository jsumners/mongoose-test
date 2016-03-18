'use strict';

function Plugin(mongoose) {
  this.connection = mongoose;
}

Plugin.prototype.works = function works() {
  const FooSchema = require('./schemas/FooWorks')(this.connection);
  const Foo = this.connection.model('Foo', FooSchema);
  return Foo.find({foo: 'bar'});
};

Plugin.prototype.fails = function fails() {
  const BarSchema = require('./schemas/BarFails');
  const Bar = this.connection.model('Bar', BarSchema);
  return Bar.find({bar: 42});
};

module.exports = Plugin;
