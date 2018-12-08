require('babel-polyfill');
require('babel-register');
require('dotenv').config();

const { TEST_SUITE } = process.env;

if (TEST_SUITE === 'UNIT') describe('Unit tests', require('./unit').default);
if (TEST_SUITE === 'END2END') describe('End to end tests', require('./end_to_end').default);
