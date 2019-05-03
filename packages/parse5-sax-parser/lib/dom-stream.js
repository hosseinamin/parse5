/**
 * uncomplete implementation of node's stream specific for this module
 */
const { EventEmitter } = require("events");
const { ReadableStream, WritableStream } = require('web-streams-polyfill');

class TransformWritableSink {
    constructor (transform) {
        this.transform = transform;
        this.decoder = new TextDecoder("utf-8");
    }
    write (chunk) {
        return new Promise((resolve, reject) => {
            try {
              var decoded = this.decoder.decode(chunk, {stream:true});
                this.transform._transform(decoded, "utf-8", (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (res != null) {
                            this.transform._controller.enqueue(res);
                        }
                        resolve();
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    }
    close () {
        return new Promise((resolve, reject) => {
            try {
                this.transform._final((err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        this.transform.push(res);
                        if (res != null) {
                            this.transform.push(null);
                        }
                        resolve();
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    }
    abort (err) {
        this.transform.emit("error", err);
        this.transform._final(function () { });
    }
}

class Transform extends EventEmitter {
    constructor (options) {
        super()
        this._before_ctr = [];
        this._closed = false;
        let sink = new TransformWritableSink(this)
        this.inputStream = new WritableStream(sink, options.queuingStrategy);
        this.outputStream = new ReadableStream({ start: this._start.bind(this) });
    }
    pipe (a) {
        // dummy function
    }
    push (chunk) {
        if (this._controller != null) {
            if (this._closed) {
                return;
            }
            if (chunk == null) {
                this._closed = true;
                this._controller.close();
            } else {
                this._controller.enqueue(chunk);
            }
        } else {
            this._before_ctr.push(chunk);
        }
    }
    _start (controller) {
        this._controller = controller;
        for (let achunk of this._before_ctr) {
            controller.enqueue(newchunk);
        }
        delete this._before_ctr;
        if (this._closed) {
            controller.close();
        }
    }
    getOutputStream () {
        return this.outputStream;
    }
    getInputStream () {
        return this.inputStream;
    }
}

class Writable {
    // Dummy-class
}

module.exports = { Writable, Transform }
