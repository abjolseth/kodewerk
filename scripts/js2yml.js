'use strict';
const fs = require('fs');
const yaml = require('js-yaml');
const Kodeverk = require('../src/index');

const yml = yaml.safeDump(Kodeverk.kodeSet());
console.log(yml);