'use strict';

module.exports = function getSchema(mongoose) {
  const Schema = mongoose.Schema;
  return new Schema({foo: String});
};
