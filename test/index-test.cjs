'use strict';

const assert = require('node:assert');
const vows = require('vows');

const {flash} = require('../lib/flash.js');

vows
    .describe('connect-flash')
    .addBatch({
        module: {
            'should export middleware': function() {
                assert.isFunction(flash);
            },
        },
    })
    .export(module);

