'use strict';

var Writable;
if (process.env.__PLATFORM__ === 'browser') {
  Writable = require('./dom-stream').Writable;
} else {
  Writable = require('stream').Writable;
}

class DevNullStream extends Writable {
    _write(chunk, encoding, cb) {
        cb();
    }
}

module.exports = DevNullStream;
