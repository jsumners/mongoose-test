'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BarSchema = new Schema({bar: Number});

module.exports = BarSchema;
