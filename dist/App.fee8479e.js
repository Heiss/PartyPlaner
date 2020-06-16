// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/@bikeshaving/crank/esm/index-e4c589c1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = __generator;
exports.c = createElement;
exports.d = __extends;
exports.e = __values;
exports.g = __read;
exports.i = isElement;
exports.f = exports.b = exports.a = exports.T = exports.S = exports.R = exports.P = exports.F = exports.D = exports.C = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.f = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.f = __assign;

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */


const privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */

const wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */

function pd(event) {
  const retv = privateData.get(event);
  console.assert(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */


function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
    }

    return;
  }

  if (!data.event.cancelable) {
    return;
  }

  data.canceled = true;

  if (typeof data.event.preventDefault === "function") {
    data.event.preventDefault();
  }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */

/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */


function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget,
    event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }); // https://heycam.github.io/webidl/#Unforgeable

  Object.defineProperty(this, "isTrusted", {
    value: false,
    enumerable: true
  }); // Define accessors

  const keys = Object.keys(event);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
} // Should be enumerable, but class methods are not enumerable.


Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },

  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath() {
    const currentTarget = pd(this).currentTarget;

    if (currentTarget == null) {
      return [];
    }

    return [currentTarget];
  },

  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },

  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },

  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },

  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },

  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation() {
    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.stopPropagation === "function") {
      data.event.stopPropagation();
    }
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation() {
    const data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;

    if (typeof data.event.stopImmediatePropagation === "function") {
      data.event.stopImmediatePropagation();
    }
  },

  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },

  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },

  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault() {
    setCancelFlag(pd(this));
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },

  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },

  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },

  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },

  set cancelBubble(value) {
    if (!value) {
      return;
    }

    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.cancelBubble === "boolean") {
      data.event.cancelBubble = true;
    }
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },

  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },

  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent() {// Do nothing.
  }

}; // `constructor` is not enumerable.

Object.defineProperty(Event.prototype, "constructor", {
  value: Event,
  configurable: true,
  writable: true
}); // Ensure `event instanceof window.Event` is `true`.

if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype); // Make association for wrappers.

  wrappers.set(window.Event.prototype, Event);
}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */


function defineRedirectDescriptor(key) {
  return {
    get() {
      return pd(this).event[key];
    },

    set(value) {
      pd(this).event[key] = value;
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */


function defineCallDescriptor(key) {
  return {
    value() {
      const event = pd(this).event;
      return event[key].apply(event, arguments);
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */


function defineWrapper(BaseEvent, proto) {
  const keys = Object.keys(proto);

  if (keys.length === 0) {
    return BaseEvent;
  }
  /** CustomEvent */


  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }

  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: {
      value: CustomEvent,
      configurable: true,
      writable: true
    }
  }); // Define accessors.

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in BaseEvent.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, key);
      const isFunc = typeof descriptor.value === "function";
      Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
    }
  }

  return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */


function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }

  let wrapper = wrappers.get(proto);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }

  return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */


function wrapEvent(eventTarget, event) {
  const Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */


function isStopped(event) {
  return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */


function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */


function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */


function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */


const listenersMap = new WeakMap(); // Listener types

const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */

function isObject(x) {
  return x !== null && typeof x === "object"; //eslint-disable-line no-restricted-syntax
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */


function getListeners(eventTarget) {
  const listeners = listenersMap.get(eventTarget);

  if (listeners == null) {
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  }

  return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */


function defineEventAttributeDescriptor(eventName) {
  return {
    get() {
      const listeners = getListeners(this);
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }

        node = node.next;
      }

      return null;
    },

    set(listener) {
      if (typeof listener !== "function" && !isObject(listener)) {
        listener = null; // eslint-disable-line no-param-reassign
      }

      const listeners = getListeners(this); // Traverse to the tail while removing old value.

      let prev = null;
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          // Remove old value.
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }

        node = node.next;
      } // Add new value.


      if (listener !== null) {
        const newNode = {
          listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };

        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */


function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */


function defineCustomEventTarget(eventNames) {
  /** CustomEventTarget */
  function CustomEventTarget() {
    EventTarget.call(this);
  }

  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });

  for (let i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }

  return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */


function EventTarget() {
  /*eslint-disable consistent-return */
  if (this instanceof EventTarget) {
    listenersMap.set(this, new Map());
    return;
  }

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }

  if (arguments.length > 0) {
    const types = new Array(arguments.length);

    for (let i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }

    return defineCustomEventTarget(types);
  }

  throw new TypeError("Cannot call a class as a function");
  /*eslint-enable consistent-return */
} // Should be enumerable, but class methods are not enumerable.


EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    if (typeof listener !== "function" && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }

    const listeners = getListeners(this);
    const optionsIsObj = isObject(options);
    const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    const newNode = {
      listener,
      listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    }; // Set it as the first node if the first node is null.

    let node = listeners.get(eventName);

    if (node === undefined) {
      listeners.set(eventName, newNode);
      return;
    } // Traverse to the tail while checking duplication..


    let prev = null;

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        // Should ignore duplication.
        return;
      }

      prev = node;
      node = node.next;
    } // Add it.


    prev.next = newNode;
  },

  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    const listeners = getListeners(this);
    const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    let prev = null;
    let node = listeners.get(eventName);

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }

        return;
      }

      prev = node;
      node = node.next;
    }
  },

  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent(event) {
    if (event == null || typeof event.type !== "string") {
      throw new TypeError('"event.type" should be a string.');
    } // If listeners aren't registered, terminate.


    const listeners = getListeners(this);
    const eventName = event.type;
    let node = listeners.get(eventName);

    if (node == null) {
      return true;
    } // Since we cannot rewrite several properties, so wrap object.


    const wrappedEvent = wrapEvent(this, event); // This doesn't process capturing phase and bubbling phase.
    // This isn't participating in a tree.

    let prev = null;

    while (node != null) {
      // Remove this listener if it's once
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      } // Call this listener


      setPassiveListener(wrappedEvent, node.passive ? node.listener : null);

      if (typeof node.listener === "function") {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
        node.listener.handleEvent(wrappedEvent);
      } // Break if `event.stopImmediatePropagation` was called.


      if (isStopped(wrappedEvent)) {
        break;
      }

      node = node.next;
    }

    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }

}; // `constructor` is not enumerable.

Object.defineProperty(EventTarget.prototype, "constructor", {
  value: EventTarget,
  configurable: true,
  writable: true
}); // Ensure `eventTarget instanceof window.EventTarget` is `true`.

if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

function normalizeOptions(options) {
  var capture = false;
  var passive;
  var once;

  if (typeof options === "boolean") {
    capture = options;
  } else if (options != null) {
    capture = !!options.capture;
    passive = options.passive;
    once = options.once;
  }

  return {
    capture: capture,
    passive: passive,
    once: once
  };
}

function isEventTarget(value) {
  return value != null && typeof value.addEventListener === "function" && // TODO: maybe we don’t need these checks
  typeof value.removeEventListener === "function" && typeof value.dispatchEvent === "function";
}

var CrankEventTarget =
/** @class */
function (_super) {
  __extends(CrankEventTarget, _super);

  function CrankEventTarget(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent; // TODO: maybe use a helper class?
    // we need a map from:
    // type -> capture -> listener record
    // for efficient querying

    _this.listeners = undefined;
    _this.delegate = undefined;
    _this.delegates = undefined;
    return _this;
  }

  CrankEventTarget.prototype.setDelegate = function (delegate) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

    if (this.delegates !== undefined) {
      if (this.listeners !== undefined) {
        try {
          for (var _e = __values(this.delegates), _f = _e.next(); !_f.done; _f = _e.next()) {
            var delegate_1 = _f.value;

            try {
              for (var _g = (e_2 = void 0, __values(this.listeners)), _h = _g.next(); !_h.done; _h = _g.next()) {
                var listener = _h.value;
                delegate_1.removeEventListener(listener.type, listener.callback, listener.options);
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }

      this.delegates = undefined;
    }

    if (this.delegate !== delegate) {
      if (this.listeners !== undefined) {
        if (this.delegate !== undefined) {
          try {
            for (var _j = __values(this.listeners), _k = _j.next(); !_k.done; _k = _j.next()) {
              var listener = _k.value;
              this.delegate.removeEventListener(listener.type, listener.callback, listener.options);
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }

        try {
          for (var _l = __values(this.listeners), _m = _l.next(); !_m.done; _m = _l.next()) {
            var listener = _m.value;
            delegate.addEventListener(listener.type, listener.callback, listener.options);
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      }

      this.delegate = delegate;
    }
  };

  CrankEventTarget.prototype.setDelegates = function (delegates) {
    var e_5, _a, e_6, _b, e_7, _c, e_8, _d;

    var _this = this;

    if (this.delegate !== undefined) {
      this.delegates = new Set([this.delegate]);
      this.delegate = undefined;
    }

    var delegates1 = new Set(Array.from(delegates).filter(isEventTarget));

    if (this.listeners !== undefined) {
      var removed = void 0;
      var added = void 0;

      if (this.delegates === undefined) {
        removed = new Set();
        added = delegates1;
      } else {
        removed = new Set(Array.from(this.delegates).filter(function (d) {
          return !delegates1.has(d);
        }));
        added = new Set(Array.from(delegates1).filter(function (d) {
          return !_this.delegates.has(d);
        }));
      }

      try {
        for (var removed_1 = __values(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
          var delegate = removed_1_1.value;

          try {
            for (var _e = (e_6 = void 0, __values(this.listeners)), _f = _e.next(); !_f.done; _f = _e.next()) {
              var listener = _f.value;
              delegate.removeEventListener(listener.type, listener.callback, listener.options);
            }
          } catch (e_6_1) {
            e_6 = {
              error: e_6_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_6) throw e_6.error;
            }
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (removed_1_1 && !removed_1_1.done && (_a = removed_1.return)) _a.call(removed_1);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      try {
        for (var added_1 = __values(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
          var delegate = added_1_1.value;

          try {
            for (var _g = (e_8 = void 0, __values(this.listeners)), _h = _g.next(); !_h.done; _h = _g.next()) {
              var listener = _h.value;
              delegate.addEventListener(listener.type, listener.callback, listener.options);
            }
          } catch (e_8_1) {
            e_8 = {
              error: e_8_1
            };
          } finally {
            try {
              if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
            } finally {
              if (e_8) throw e_8.error;
            }
          }
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (added_1_1 && !added_1_1.done && (_c = added_1.return)) _c.call(added_1);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    this.delegates = delegates1;
  };

  CrankEventTarget.prototype.addEventListener = function (type, callback, options) {
    var e_9, _a;

    if (callback == null) {
      return;
    } else if (typeof callback === "object") {
      throw new Error("Listener objects are not supported");
    } else if (this.listeners === undefined) {
      this.listeners = [];
    }

    options = normalizeOptions(options);
    var record = {
      type: type,
      callback: callback,
      options: options
    };

    if (options.once) {
      var self_1 = this;

      record.callback = function (ev) {
        var result = callback.call(this, ev);
        self_1.removeEventListener(record.type, record.callback, record.options);
        return result;
      };
    }

    var idx = this.listeners.findIndex(function (record1) {
      return record.type === record1.type && record.callback === record1.callback && record.options.capture === record1.options.capture;
    });

    if (idx <= -1) {
      this.listeners.push(record);
    }

    if (this.delegate !== undefined) {
      this.delegate.addEventListener(type, callback, options);
    } else if (this.delegates !== undefined) {
      try {
        for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
          var delegate = _c.value;
          delegate.addEventListener(type, callback, options);
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_9) throw e_9.error;
        }
      }
    }

    return _super.prototype.addEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.removeEventListener = function (type, callback, options) {
    var e_10, _a;

    if (callback == null || this.listeners === undefined) {
      return;
    }

    var capture = typeof options === "boolean" ? options : !!(options && options.capture);
    var idx = this.listeners.findIndex(function (record) {
      return record.type === type && record.callback === callback && record.options.capture === capture;
    });
    var record = this.listeners[idx];

    if (record !== undefined) {
      this.listeners.splice(idx, 1);
    }

    if (this.delegate !== undefined) {
      this.delegate.removeEventListener(type, callback, options);
    } else if (this.delegates !== undefined) {
      try {
        for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
          var delegate = _c.value;
          delegate.removeEventListener(type, callback, options);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
    }

    return _super.prototype.removeEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.clearEventListeners = function () {
    var e_11, _a;

    if (this.listeners !== undefined) {
      try {
        // we slice this.listeners to create a shallow copy because
        // this.removeEventListener will mutate the listeners array
        for (var _b = __values(this.listeners.slice()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var listener = _c.value;
          this.removeEventListener(listener.type, listener.callback, listener.options);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_11) throw e_11.error;
        }
      }
    }
  }; // TODO: ev is any because event-target-shim has a weird dispatchEvent type


  CrankEventTarget.prototype.dispatchEvent = function (ev) {
    var continued = _super.prototype.dispatchEvent.call(this, ev);

    if (continued && ev.bubbles && this.parent !== undefined) {
      // TODO: implement event capturing
      continued = this.parent.dispatchEvent(ev);
    }

    return continued;
  };

  return CrankEventTarget;
}(EventTarget);

function isPromiseLike(value) {
  return value != null && typeof value.then === "function";
}

function upgradePromiseLike(value) {
  if (!(value instanceof Promise)) {
    return Promise.resolve(value);
  }

  return value;
}

function isIterable(value) {
  return value != null && typeof value[Symbol.iterator] === "function";
}

function isNonStringIterable(value) {
  return typeof value !== "string" && isIterable(value);
}

function isIteratorOrAsyncIterator(value) {
  return value != null && typeof value.next === "function";
}

var _a;

var ElementSigil = Symbol.for("crank.ElementSigil"); // Special Intrinsic Tags
// TODO: We assert symbol tags as any because typescript support for symbol
// tags in JSX does not exist yet.
// https://github.com/microsoft/TypeScript/issues/38367

var Fragment = Symbol.for("crank.Fragment");
exports.F = Fragment;
var Copy = Symbol.for("crank.Copy");
exports.C = Copy;
var Portal = Symbol.for("crank.Portal");
exports.P = Portal;
var Raw = Symbol.for("crank.Raw");
exports.R = Raw;

function isElement(value) {
  return value != null && value.__sigil__ === ElementSigil;
}

function createElement(tag, props, children) {
  var key = props != null && props["crank-key"] != null ? props["crank-key"] : undefined;
  var props1 = {};

  for (var key_1 in props) {
    if (key_1 !== "crank-key") {
      props1[key_1] = props[key_1];
    }
  }

  var length = arguments.length;

  if (length > 3) {
    var children1 = [];

    while (length-- > 2) {
      children1[length - 2] = arguments[length];
    }

    props1.children = children1;
  } else if (length > 2) {
    props1.children = children;
  }

  return {
    __sigil__: ElementSigil,
    tag: tag,
    props: props1,
    key: key
  };
}

function normalize(child) {
  if (child == null || typeof child === "boolean") {
    return undefined;
  } else if (typeof child === "string" || isElement(child)) {
    return child;
  } else {
    return child.toString();
  }
}

function flatten(children) {
  var children_1, children_1_1, child, e_1_1;

  var e_1, _a;

  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        if (!(children == null)) return [3
        /*break*/
        , 1];
        return [2
        /*return*/
        ];

      case 1:
        if (!isNonStringIterable(children)) return [3
        /*break*/
        , 12];
        _b.label = 2;

      case 2:
        _b.trys.push([2, 9, 10, 11]);

        children_1 = __values(children), children_1_1 = children_1.next();
        _b.label = 3;

      case 3:
        if (!!children_1_1.done) return [3
        /*break*/
        , 8];
        child = children_1_1.value;
        if (!isNonStringIterable(child)) return [3
        /*break*/
        , 5];
        return [4
        /*yield*/
        , createElement(Fragment, null, child)];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        return [4
        /*yield*/
        , normalize(child)];

      case 6:
        _b.sent();

        _b.label = 7;

      case 7:
        children_1_1 = children_1.next();
        return [3
        /*break*/
        , 3];

      case 8:
        return [3
        /*break*/
        , 11];

      case 9:
        e_1_1 = _b.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 11];

      case 10:
        try {
          if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 11:
        return [2
        /*return*/
        ];

      case 12:
        return [4
        /*yield*/
        , normalize(children)];

      case 13:
        _b.sent();

        return [2
        /*return*/
        ];
    }
  });
}

var LeafNode =
/** @class */
function () {
  function LeafNode() {
    // flags
    this.dirty = true;
    this.internal = false;
    this.tag = undefined;
    this.key = undefined;
    this.value = undefined;
    this.previousSibling = undefined;
    this.nextSibling = undefined;
  }

  return LeafNode;
}();

var ParentNode =
/** @class */
function () {
  function ParentNode() {
    // flags
    this.dirty = true;
    this.moved = true;
    this.copied = false; // A flag which means that the parent has updated the current node. It is set
    // to false once the node has committed, and if this.updating is not true
    // when the node is refreshing or committing, this means that the work was
    // initiated by the current node or its descendants.
    // TODO: with the addition of passing a requester to parents when we want them to commit, maybe we shouldn’t have this flag at all

    this.updating = false; // A flag which means the current node is unmounted.

    this.unmounted = false;
    this.internal = true;
    this.key = undefined;
    this.value = undefined;
    this.dirtyStart = undefined; // TODO: implement dirtyEnd

    this.keyedChildren = undefined;
    this.firstChild = undefined;
    this.lastChild = undefined;
    this.previousSibling = undefined;
    this.nextSibling = undefined;
    this.alternate = undefined; // When children update asynchronously, we race their result against the next
    // update of children. The onNewResult property is set to the resolve
    // function of the promise which the current update is raced against.

    this.onNewResult = undefined;
    this.ctx = undefined;
    this.scope = undefined;
    this.childScope = undefined;
  }

  ParentNode.prototype.appendChild = function (child) {
    if (this.lastChild === undefined) {
      this.firstChild = child;
      this.lastChild = child;
      child.previousSibling = undefined;
      child.nextSibling = undefined;
    } else {
      child.previousSibling = this.lastChild;
      child.nextSibling = undefined;
      this.lastChild.nextSibling = child;
      this.lastChild = child;
    }
  };

  ParentNode.prototype.insertBefore = function (child, reference) {
    if (reference == null) {
      this.appendChild(child);
      return;
    } else if (child === reference) {
      return;
    }

    child.nextSibling = reference;

    if (reference.previousSibling === undefined) {
      child.previousSibling = undefined;
      this.firstChild = child;
    } else {
      child.previousSibling = reference.previousSibling;
      reference.previousSibling.nextSibling = child;
    }

    reference.previousSibling = child;
  };

  ParentNode.prototype.removeChild = function (child) {
    if (child.previousSibling === undefined) {
      this.firstChild = child.nextSibling;
    } else {
      child.previousSibling.nextSibling = child.nextSibling;
    }

    if (child.nextSibling === undefined) {
      this.lastChild = child.previousSibling;
    } else {
      child.nextSibling.previousSibling = child.previousSibling;
    }

    child.previousSibling = undefined;
    child.nextSibling = undefined;
  };

  ParentNode.prototype.replaceChild = function (child, reference) {
    this.insertBefore(child, reference);
    this.removeChild(reference);
  };

  ParentNode.prototype.update = function (props) {
    this.props = props;
    this.updating = true;
    return this.updateChildren(this.props && this.props.children);
  }; // TODO: reduce duplication and complexity of this method :P


  ParentNode.prototype.updateChildren = function (children) {
    var e_2, _a, e_3, _b;

    var _this = this;

    var result;
    var keyedChildren;
    var node = this.firstChild;

    var _loop_1 = function (child) {
      // Alignment
      var tag = typeof child === "object" ? child.tag : undefined;
      var key = typeof child === "object" ? child.key : undefined;

      if (key !== undefined && keyedChildren !== undefined && keyedChildren.has(key)) {
        // TODO: warn about a key collision
        key = undefined;
      }

      if (node === undefined) {
        if (key === undefined) {
          if (tag === Copy) {
            return "continue";
          }

          node = createNode(this_1, this_1.renderer, child);
          this_1.appendChild(node);
        } else {
          node = this_1.keyedChildren && this_1.keyedChildren.get(key);

          if (node === undefined) {
            if (tag === Copy) {
              return "continue";
            }

            node = createNode(this_1, this_1.renderer, child);
          } else {
            this_1.keyedChildren.delete(key);
            node.moved = true;
            this_1.removeChild(node);
          }

          this_1.appendChild(node);
        }
      } else if (key !== undefined) {
        var keyedNode = this_1.keyedChildren && this_1.keyedChildren.get(key);

        if (keyedNode === undefined) {
          if (tag === Copy) {
            return "continue";
          }

          keyedNode = createNode(this_1, this_1.renderer, child);
          this_1.insertBefore(keyedNode, node);
        } else {
          this_1.keyedChildren.delete(key);

          if (node !== keyedNode) {
            keyedNode.moved = true;
            this_1.removeChild(keyedNode);
            this_1.insertBefore(keyedNode, node);
          }
        }

        node = keyedNode;
      } else if (node.key !== undefined) {
        while (node !== undefined && node.key !== undefined) {
          node = node.nextSibling;
        }

        if (node === undefined) {
          if (tag === Copy) {
            return "continue";
          }

          node = createNode(this_1, this_1.renderer, child);
          this_1.appendChild(node);
        }
      } // Updating


      if (tag === Copy) {
        if (node.internal) {
          node.copied = true;
        }
      } else if (node.tag === tag) {
        if (node.internal) {
          var result1_1 = node.update(child.props);

          if (result1_1 !== undefined) {
            result = result === undefined ? result1_1 : result.then(function () {
              return result1_1;
            });
          }
        } else if (typeof child === "string") {
          var text = this_1.renderer.text(child);
          node.dirty = node.value !== text;
          node.value = text;
        } else {
          node.dirty = node.value !== undefined;
          node.value = undefined;
        }
      } else {
        // replace current node
        var newNode_1 = createNode(this_1, this_1.renderer, child);
        var result1_2;

        if (newNode_1.internal) {
          result1_2 = newNode_1.update(child.props);
        } else if (typeof child === "string") {
          newNode_1.value = this_1.renderer.text(child);
        } else {
          newNode_1.value = undefined;
        }

        if (result1_2 === undefined) {
          if (node.internal) {
            node.unmount();
          }
        } else {
          newNode_1.alternate = node;
          result1_2 = result1_2.then(function () {
            // TODO: do we need to unmount all alternates along the chain?
            for (var node_1 = newNode_1.alternate; node_1 !== undefined; node_1 = node_1.alternate) {
              if (node_1.internal) {
                node_1.unmount();
              }
            }

            newNode_1.alternate = undefined;
            return undefined; // void :(
          });
          result = result === undefined ? result1_2 : result.then(function () {
            return result1_2;
          });
        }

        this_1.replaceChild(newNode_1, node);
        node = newNode_1;
      }

      if (key !== undefined) {
        if (keyedChildren === undefined) {
          keyedChildren = new Map();
        }

        keyedChildren.set(key, node);
      }

      node = node.nextSibling;
    };

    var this_1 = this;

    try {
      // TODO: split this algorithm into two stages.
      // Stage 1: Alignment
      // Stage 2: Updating
      for (var _c = __values(flatten(children)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var child = _d.value;

        _loop_1(child);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    for (var nextSibling = node && node.nextSibling; node !== undefined; node = nextSibling, nextSibling = node && node.nextSibling) {
      if (node.key === undefined) {
        if (node.internal) {
          node.unmount();
        }

        this.removeChild(node);
      }
    } // unmount excess keyed children
    // TODO: this is likely where the logic for asynchronous unmounting would go


    if (this.keyedChildren !== undefined) {
      try {
        for (var _e = __values(this.keyedChildren.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
          var node_2 = _f.value;
          node_2.unmount();
          this.removeChild(node_2);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    }

    this.keyedChildren = keyedChildren;

    if (this.onNewResult !== undefined) {
      this.onNewResult(result);
      this.onNewResult = undefined;
    }

    if (result !== undefined) {
      result = result.then(function () {
        return _this.commit();
      });
      var newResult = new Promise(function (resolve) {
        return _this.onNewResult = resolve;
      });
      return Promise.race([result, newResult]);
    }

    this.commit();
  }; // TODO: this is an inaccurate name for what this method does but changing it
  // will make rebases harder


  ParentNode.prototype.commitChildren = function () {
    var buffer;
    var childValues = [];
    var oldLength = 0;

    for (var child = this.firstChild; child !== undefined; child = child.nextSibling) {
      var child1 = void 0;

      if (child.alternate !== undefined) {
        child1 = child;

        while (child.alternate !== undefined) {
          child = child.alternate;
        }
      }

      if (typeof child.value === "string") {
        buffer = buffer === undefined ? child.value : buffer + child.value;
      } else if (child.tag !== Portal) {
        if (buffer !== undefined) {
          childValues.push(buffer);
          buffer = undefined;
        }

        if (Array.isArray(child.value)) {
          childValues = childValues.concat(child.value);
        } else if (child.value !== undefined) {
          childValues.push(child.value);
        }
      }

      if (child.dirty || child.internal && child.moved) {
        if (!this.dirty) {
          if (child.internal && !child.moved && child.dirtyStart !== undefined) {
            this.dirtyStart = oldLength + child.dirtyStart;
          } else {
            for (var dirtyStart = oldLength - 1; dirtyStart >= 0; dirtyStart--) {
              if (typeof childValues[dirtyStart] !== "string") {
                this.dirtyStart = dirtyStart;
                break;
              }
            }
          }

          this.dirty = true;
        }
      }

      child.dirty = false;

      if (child.internal) {
        child.copied = false;
        child.moved = false;
        child.dirtyStart = undefined;
      }

      oldLength = childValues.length;

      if (child1 !== undefined) {
        child = child1;
      }
    }

    if (buffer !== undefined) {
      childValues.push(buffer);
    }

    if (this.firstChild === undefined) {
      this.dirty = true;
    }

    return childValues;
  };

  ParentNode.prototype.unmountChildren = function (dirty) {
    for (var node = this.firstChild; node !== undefined; node = node.nextSibling) {
      if (node.internal) {
        node.unmount(dirty);
      }
    }
  };

  ParentNode.prototype.catch = function (reason) {
    if (this.parent === undefined) {
      throw reason;
    }

    return this.parent.catch(reason);
  };

  return ParentNode;
}();

var FragmentNode =
/** @class */
function (_super) {
  __extends(FragmentNode, _super);

  function FragmentNode(parent, renderer, key) {
    var _this = _super.call(this) || this;

    _this.tag = Fragment;
    _this.key = key;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.ctx = parent.ctx;
    _this.scope = parent.childScope;
    return _this;
  }

  FragmentNode.prototype.commit = function () {
    var childValues = this.commitChildren();
    this.value = childValues.length > 1 ? childValues : childValues[0];

    if (!this.updating && this.dirty) {
      this.parent.commit();
    }

    this.updating = false;
    return; // void :(
  };

  FragmentNode.prototype.unmount = function (dirty) {
    if (dirty === void 0) {
      dirty = true;
    }

    if (this.unmounted) {
      return;
    }

    this.unmounted = true;
    this.unmountChildren(dirty);
  };

  return FragmentNode;
}(ParentNode);

var HostNode =
/** @class */
function (_super) {
  __extends(HostNode, _super);

  function HostNode(parent, renderer, tag, key, props) {
    var _this = _super.call(this) || this; // flags


    _this.dirtyProps = true;
    _this.dirtyChildren = true;
    _this.dirtyRemoval = true; // A flag to make sure the HostContext isn’t iterated multiple times without a yield.

    _this.iterating = false; // A flag which indicates that this node’s iterator has returned, as in, it
    // produced an iteration whose done property is set to true.

    _this.finished = false;
    _this.value = undefined;
    _this.iterator = undefined;
    _this.childValues = [];
    _this.tag = tag;
    _this.key = key;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.intrinsic = renderer.intrinsic(tag);
    _this.ctx = parent && parent.ctx;
    _this.scope = parent && parent.childScope;
    _this.childScope = renderer.scope(tag, props);
    return _this;
  }

  HostNode.prototype.commit = function () {
    this.childValues = this.commitChildren();
    this.dirtyProps = this.updating;
    this.dirtyChildren = this.dirty;

    try {
      this.commitSelf();
    } catch (err) {
      if (this.parent === undefined) {
        throw err;
      }

      return this.parent.catch(err);
    }

    if (!this.updating && this.dirty && this.parent !== undefined) {
      this.parent.commit();
    }

    this.updating = false;
  };

  HostNode.prototype.commitSelf = function () {
    if (this.iterator === undefined) {
      var value = this.intrinsic.call(this, __assign(__assign({}, this.props), {
        children: this.childValues
      }));

      if (isIteratorOrAsyncIterator(value)) {
        this.iterator = value;
      } else {
        this.dirty = this.value !== value;
        this.value = value;
        return;
      }
    }

    var iteration = this.iterator.next();
    this.dirty = this.value !== iteration.value;
    this.value = iteration.value;
    this.iterating = false;

    if (iteration.done) {
      this.finished = true;
    }
  };

  HostNode.prototype.unmount = function (dirty) {
    if (dirty === void 0) {
      dirty = true;
    }

    if (this.unmounted) {
      return;
    } else if (!this.finished) {
      this.dirtyRemoval = dirty;

      if (this.iterator !== undefined && this.iterator.return) {
        try {
          this.iterator.return();
        } catch (err) {
          if (this.parent === undefined) {
            throw err;
          }

          return this.parent.catch(err);
        }
      }

      this.finished = true;
    }

    this.unmounted = true;
    this.unmountChildren(this.tag === Portal);
  };

  HostNode.prototype[Symbol.iterator] = function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!this.unmounted) return [3
          /*break*/
          , 2];

          if (this.iterating) {
            throw new Error("You must yield for each iteration of this.");
          }

          this.iterating = true;
          return [4
          /*yield*/
          , __assign(__assign({}, this.props), {
            children: this.childValues
          })];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 0];

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  };

  return HostNode;
}(ParentNode);

var SyncFn = 0;
var AsyncFn = 1;
var SyncGen = 2;
var AsyncGen = 3;

var ComponentNode =
/** @class */
function (_super) {
  __extends(ComponentNode, _super);

  function ComponentNode(parent, renderer, tag, key, props) {
    var _this = _super.call(this) || this; // A flag to make sure the Context isn’t iterated multiple times without a yield.


    _this.iterating = false; // A flag which indicates that this node’s iterator has returned, as in, it
    // produced an iteration whose done property is set to true.

    _this.finished = false; // A flag to make sure we aren’t stepping through generators multiple times
    // synchronously. This can happen if a generator component yields some
    // children, those children dispatch an event, and the currently yielding
    // node listens to the event and dispatches another event. We simply fail
    // silently when this occurs, though we may in the future log a warning.

    _this.stepping = false; // A flag used by the [Symbol.asyncIterator] method of component nodes to
    // indicate when props are available. this.onProps is the resolve function of
    // the promise which resolves when props are made available.
    // TODO: maybe we can use the existence/absence of this.onProps instead of
    // boolean flag.

    _this.available = false;
    _this.iterator = undefined;
    _this.oldResult = undefined;
    _this.componentType = undefined; // TODO: explain these properties

    _this.inflightPending = undefined;
    _this.enqueuedPending = undefined;
    _this.inflightResult = undefined;
    _this.enqueuedResult = undefined;
    _this.onProps = undefined;
    _this.provisions = undefined;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.tag = tag;
    _this.key = key;
    _this.props = props;
    _this.ctx = new Context(_this, parent.ctx);
    _this.scope = parent.childScope;
    return _this;
  }

  ComponentNode.prototype.refresh = function () {
    var _this = this;

    if (this.stepping || this.unmounted) {
      // TODO: we may want to log warnings when stuff like this happens
      return;
    }

    if (this.onProps === undefined) {
      this.available = true;
    } else {
      this.onProps(this.props);
      this.onProps = undefined;
    }

    var result = this.run();

    if (result === undefined) {
      this.commit();
      return;
    }

    return result.then(function () {
      return _this.commit();
    });
  };

  ComponentNode.prototype.update = function (props) {
    this.props = props;
    this.updating = true;

    if (this.onProps === undefined) {
      this.available = true;
    } else {
      this.onProps(this.props);
      this.onProps = undefined;
    }

    return this.run();
  };

  ComponentNode.prototype.updateChildren = function (children) {
    if (isNonStringIterable(children)) {
      children = createElement(Fragment, null, children);
    }

    return _super.prototype.updateChildren.call(this, children);
  };

  ComponentNode.prototype.run = function () {
    var _this = this;

    if (this.inflightPending === undefined) {
      var _a = __read(this.step(), 2),
          pending_1 = _a[0],
          result = _a[1];

      if (isPromiseLike(pending_1)) {
        this.inflightPending = pending_1.finally(function () {
          return _this.advance();
        });
      }

      this.inflightResult = result;
      return this.inflightResult;
    } else if (this.componentType === AsyncGen) {
      return this.inflightResult;
    } else if (this.enqueuedPending === undefined) {
      var resolve_1;
      this.enqueuedPending = this.inflightPending.then(function () {
        var _a = __read(_this.step(), 2),
            pending = _a[0],
            result = _a[1];

        resolve_1(result);
        return pending;
      }).finally(function () {
        return _this.advance();
      });
      this.enqueuedResult = new Promise(function (resolve1) {
        return resolve_1 = resolve1;
      });
    }

    return this.enqueuedResult;
  };

  ComponentNode.prototype.step = function () {
    var _this = this;

    if (this.finished) {
      return [undefined, undefined];
    }

    this.stepping = true;

    if (this.iterator === undefined) {
      this.ctx.clearEventListeners();
      var value = void 0;

      try {
        value = this.tag.call(this.ctx, this.props);
      } catch (err) {
        var caught = this.parent.catch(err);
        return [undefined, caught];
      }

      if (isIteratorOrAsyncIterator(value)) {
        this.iterator = value;
      } else if (isPromiseLike(value)) {
        var value1 = upgradePromiseLike(value);
        this.componentType = AsyncFn;
        var pending_2 = value1.then(function () {
          return undefined;
        }, function () {
          return undefined;
        }); // void :(

        var result_1 = value1.then(function (child) {
          return _this.updateChildren(child);
        }, function (err) {
          return _this.parent.catch(err);
        });
        this.stepping = false;
        return [pending_2, result_1];
      } else {
        this.componentType = SyncFn;
        var result_2 = this.updateChildren(value);
        this.stepping = false;
        return [undefined, result_2];
      }
    }

    var oldValue = this.oldResult === undefined ? this.value : this.oldResult.then(function () {
      return _this.value;
    });
    this.oldResult = undefined;
    var iteration;

    try {
      iteration = this.iterator.next(oldValue);
    } catch (err) {
      var caught = this.parent.catch(err);
      return [caught, caught];
    }

    this.stepping = false;

    if (isPromiseLike(iteration)) {
      this.componentType = AsyncGen;
      iteration = iteration.catch(function (err) {
        var p = _this.parent.catch(err);

        if (p === undefined) {
          return {
            value: undefined,
            done: true
          };
        }

        return p.then(function () {
          return {
            value: undefined,
            done: true
          };
        });
      });
      var pending_3 = iteration.then(function () {
        return undefined;
      }, function () {
        return undefined;
      }); // void :(

      var result_3 = iteration.then(function (iteration) {
        _this.iterating = false;

        if (iteration.done) {
          _this.finished = true;
        }

        var result = _this.updateChildren(iteration.value);

        if (isPromiseLike(result)) {
          _this.oldResult = result.catch(function () {
            return undefined;
          }); // void :(
        }

        return result;
      });
      return [pending_3, result_3];
    }

    this.iterating = false;
    this.componentType = SyncGen;

    if (iteration.done) {
      this.finished = true;
    }

    var result = this.updateChildren(iteration.value);
    return [result, result];
  };

  ComponentNode.prototype.advance = function () {
    var _this = this;

    this.inflightPending = this.enqueuedPending;
    this.inflightResult = this.enqueuedResult;
    this.enqueuedPending = undefined;
    this.enqueuedResult = undefined;

    if (this.componentType === AsyncGen && !this.finished) {
      this.run().catch(function (err) {
        // We catch and rethrow the error to trigger an unhandled promise
        // rejection.
        if (!_this.updating) {
          throw err;
        }
      });
    }
  };

  ComponentNode.prototype.commit = function () {
    var childValues = this.commitChildren();
    this.value = childValues.length > 1 ? childValues : childValues[0];

    if (isEventTarget(this.value)) {
      this.ctx.setDelegate(this.value);
    } else if (childValues.length > 1) {
      this.ctx.setDelegates(childValues);
    }

    if (!this.updating && this.dirty) {
      this.parent.commit();
    }

    this.updating = false;
    return; // void :(
  };

  ComponentNode.prototype.unmount = function (dirty) {
    var _this = this;

    if (dirty === void 0) {
      dirty = true;
    }

    if (this.unmounted) {
      return;
    }

    this.updating = false;
    this.unmounted = true;
    this.ctx.clearEventListeners();

    if (!this.finished) {
      this.finished = true; // helps avoid deadlocks

      if (this.onProps !== undefined) {
        this.onProps(this.props);
        this.onProps = undefined;
      }

      if (this.iterator !== undefined && this.iterator.return) {
        var iteration = void 0;

        try {
          iteration = this.iterator.return();
        } catch (err) {
          return this.parent.catch(err);
        }

        if (isPromiseLike(iteration)) {
          return iteration.then(function () {
            return void _this.unmountChildren(dirty);
          }, // void :(
          function (err) {
            return _this.parent.catch(err);
          });
        }
      }

      this.unmountChildren(dirty);
    }
  };

  ComponentNode.prototype.catch = function (reason) {
    var _this = this;

    if (this.iterator === undefined || this.iterator.throw === undefined || this.finished) {
      return _super.prototype.catch.call(this, reason);
    } // helps avoid deadlocks


    if (this.onProps !== undefined) {
      this.onProps(this.props);
      this.onProps = undefined;
    }

    var iteration;

    try {
      iteration = this.iterator.throw(reason);
    } catch (err) {
      return this.parent.catch(err);
    }

    if (isPromiseLike(iteration)) {
      var result = iteration.then(function (iteration) {
        if (iteration.done) {
          _this.finished = true;
        }

        return _this.updateChildren(iteration.value);
      }, function (err) {
        return _this.parent.catch(err);
      });
      return result;
    }

    if (iteration.done) {
      this.finished = true;
    }

    return this.updateChildren(iteration.value);
  };

  ComponentNode.prototype.get = function (name) {
    for (var parent_1 = this.parent; parent_1 !== undefined; parent_1 = parent_1.parent) {
      if ( // TODO: get rid of this instanceof
      parent_1 instanceof ComponentNode && parent_1.provisions !== undefined && parent_1.provisions.has(name)) {
        return parent_1.provisions.get(name);
      }
    }
  };

  ComponentNode.prototype.set = function (name, value) {
    if (this.provisions === undefined) {
      this.provisions = new Map();
    }

    this.provisions.set(name, value);
  };

  ComponentNode.prototype[Symbol.iterator] = function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!this.unmounted) return [3
          /*break*/
          , 2];

          if (this.iterating) {
            throw new Error("You must yield for each iteration of this.");
          } else if (this.componentType === AsyncGen) {
            throw new Error("Use for await...of in async generator components.");
          }

          this.iterating = true;
          return [4
          /*yield*/
          , this.props];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 0];

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  };

  ComponentNode.prototype[Symbol.asyncIterator] = function () {
    return __asyncGenerator(this, arguments, function _a() {
      var props;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (this.iterating) {
              throw new Error("You must yield for each iteration of this.");
            } else if (this.componentType === SyncGen) {
              throw new Error("Use for...of in sync generator components.");
            }

            this.iterating = true;
            if (!this.available) return [3
            /*break*/
            , 3];
            this.available = false;
            return [4
            /*yield*/
            , __await(this.props)];

          case 1:
            return [4
            /*yield*/
            , _b.sent()];

          case 2:
            _b.sent();

            return [3
            /*break*/
            , 7];

          case 3:
            return [4
            /*yield*/
            , __await(new Promise(function (resolve) {
              return _this.onProps = resolve;
            }))];

          case 4:
            props = _b.sent();
            if (!!this.unmounted) return [3
            /*break*/
            , 7];
            return [4
            /*yield*/
            , __await(props)];

          case 5:
            return [4
            /*yield*/
            , _b.sent()];

          case 6:
            _b.sent();

            _b.label = 7;

          case 7:
            if (!this.unmounted) return [3
            /*break*/
            , 0];
            _b.label = 8;

          case 8:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return ComponentNode;
}(ParentNode);

function createNode(parent, renderer, child) {
  if (child === undefined || typeof child === "string") {
    return new LeafNode();
  } else if (child.tag === Fragment) {
    return new FragmentNode(parent, renderer, child.key);
  } else if (typeof child.tag === "function") {
    return new ComponentNode(parent, renderer, child.tag, child.key, child.props);
  } else {
    return new HostNode(parent, renderer, child.tag, child.key, child.props);
  }
}

var componentNodes = new WeakMap();

var Context =
/** @class */
function (_super) {
  __extends(Context, _super);

  function Context(host, parent) {
    var _this = _super.call(this, parent) || this;

    componentNodes.set(_this, host);
    return _this;
  }

  Context.prototype.get = function (name) {
    return componentNodes.get(this).get(name);
  };

  Context.prototype.set = function (name, value) {
    componentNodes.get(this).set(name, value);
  };
  /* eslint-enable no-dupe-class-members */


  Context.prototype[Symbol.iterator] = function () {
    return componentNodes.get(this)[Symbol.iterator]();
  };

  Context.prototype[Symbol.asyncIterator] = function () {
    return componentNodes.get(this)[Symbol.asyncIterator]();
  };

  Context.prototype.refresh = function () {
    return componentNodes.get(this).refresh();
  };

  return Context;
}(CrankEventTarget);

exports.a = Context;
var Default = Symbol.for("crank.Default");
exports.D = Default;
var Text = Symbol.for("crank.Text");
exports.T = Text;
var Scopes = Symbol.for("crank.Scopes");
exports.S = Scopes;
var defaultEnv = (_a = {}, _a[Default] = function (tag) {
  throw new Error("Environment did not provide an intrinsic for tag: " + tag);
}, _a[Portal] = function () {
  throw new Error("Environment did not provide an intrinsic for Portal");
}, _a[Raw] = function (_a) {
  var value = _a.value;
  return value;
}, _a);

var Renderer =
/** @class */
function () {
  function Renderer(env) {
    this.cache = new WeakMap();
    this.defaultIntrinsics = {};
    this.env = __assign({}, defaultEnv);
    this.scoper = {};
    this.extend(env);
  }

  Renderer.prototype.extend = function (env) {
    var e_4, _a, e_5, _b, e_6, _c, e_7, _d;

    if (env == null) {
      return;
    }

    try {
      for (var _e = __values(Object.keys(env)), _f = _e.next(); !_f.done; _f = _e.next()) {
        var tag = _f.value;

        if (env[tag] != null) {
          this.env[tag] = env[tag];
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var _g = __values(Object.getOwnPropertySymbols(env)), _h = _g.next(); !_h.done; _h = _g.next()) {
        var tag = _h.value;

        if (env[tag] != null && tag !== Scopes) {
          this.env[tag] = env[tag];
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (env[Scopes] != null) {
      var scoper = env[Scopes];

      try {
        for (var _j = __values(Object.keys(scoper)), _k = _j.next(); !_k.done; _k = _j.next()) {
          var tag = _k.value;

          if (scoper[tag] != null) {
            this.scoper[tag] = scoper[tag];
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
        } finally {
          if (e_6) throw e_6.error;
        }
      }

      try {
        for (var _l = __values(Object.getOwnPropertySymbols(env)), _m = _l.next(); !_m.done; _m = _l.next()) {
          var tag = _m.value;

          if (scoper[tag] != null) {
            this.scoper[tag] = scoper[tag];
          }
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }
  };

  Renderer.prototype.render = function (children, root) {
    var child = isNonStringIterable(children) ? createElement(Fragment, null, children) : children;
    var portal = isElement(child) && child.tag === Portal ? child : createElement(Portal, {
      root: root
    }, child);
    var rootNode = root != null ? this.cache.get(root) : undefined;

    if (rootNode === undefined) {
      rootNode = new HostNode(undefined, this, portal.tag, undefined, portal.props);

      if (root !== undefined && child != null) {
        this.cache.set(root, rootNode);
      }
    } else if (root != null && child == null) {
      this.cache.delete(root);
    }

    var result = rootNode.update(portal.props);

    if (isPromiseLike(result)) {
      return result.then(function () {
        rootNode.commit();

        if (portal.props.root == null) {
          rootNode.unmount();
        }

        return rootNode.value;
      });
    }

    rootNode.commit();

    if (portal.props.root == null) {
      rootNode.unmount();
    }

    return rootNode.value;
  }; // TODO: Ideally, the following methods should not be exposed outside this module


  Renderer.prototype.intrinsic = function (tag) {
    if (this.env[tag]) {
      return this.env[tag];
    } else if (this.defaultIntrinsics[tag] !== undefined) {
      return this.defaultIntrinsics[tag];
    }

    var intrinsic = this.env[Default](tag);
    this.defaultIntrinsics[tag] = intrinsic;
    return intrinsic;
  };

  Renderer.prototype.scope = function (tag, props) {
    if (tag in this.scoper) {
      if (typeof this.scoper[tag] === "function") {
        return this.scoper[tag](props);
      }

      return this.scoper[tag];
    } else if (typeof this.scoper[Default] === "function") {
      return this.scoper[Default](tag, props);
    }
  };

  Renderer.prototype.text = function (text) {
    if (this.env[Text] !== undefined) {
      return this.env[Text](text);
    }

    return text;
  };

  return Renderer;
}();

exports.b = Renderer;
},{}],"../../node_modules/@bikeshaving/crank/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.a;
  }
});
Object.defineProperty(exports, "Copy", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.C;
  }
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.D;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.F;
  }
});
Object.defineProperty(exports, "Portal", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.P;
  }
});
Object.defineProperty(exports, "Raw", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.R;
  }
});
Object.defineProperty(exports, "Renderer", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.b;
  }
});
Object.defineProperty(exports, "Scopes", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.S;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.T;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.c;
  }
});
Object.defineProperty(exports, "isElement", {
  enumerable: true,
  get: function () {
    return _indexE4c589c.i;
  }
});

var _indexE4c589c = require("./index-e4c589c1.js");
},{"./index-e4c589c1.js":"../../node_modules/@bikeshaving/crank/esm/index-e4c589c1.js"}],"../../node_modules/@bikeshaving/crank/esm/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.env = exports.DOMRenderer = void 0;

var _indexE4c589c = require("./index-e4c589c1.js");

var _a;

var SVG_NAMESPACE = "http://www.w3.org/2000/svg"; // TODO: refine/explain the NO_TOUCH set
// Gleaned from:
// https://github.com/preactjs/preact/blob/05e5d2c0d2d92c5478eeffdbd96681c96500d29f/src/diff/props.js#L111-L117

var NO_TOUCH = new Set(["form", "list", "type", "size"]); // TODO: create an allowlist/blocklist of props

function updateProps(el, props, newProps, namespace) {
  for (var name_1 in (0, _indexE4c589c.f)((0, _indexE4c589c.f)({}, props), newProps)) {
    var value = props[name_1];
    var newValue = newProps[name_1];

    switch (name_1) {
      case "children":
        break;

      case "class":
      case "className":
        {
          if (namespace === undefined) {
            el.className = newValue;
          } else {
            el.setAttribute("class", newValue);
          }

          break;
        }

      case "style":
        {
          var style = el.style;

          if (style != null) {
            if (newValue == null) {
              el.removeAttribute("style");
            } else if (typeof newValue === "string") {
              style.cssText = newValue;
            } else {
              for (var styleName in (0, _indexE4c589c.f)((0, _indexE4c589c.f)({}, value), newValue)) {
                var styleValue = value && value[styleName];
                var newStyleValue = newValue && newValue[styleName];

                if (newStyleValue == null) {
                  style.removeProperty(styleName);
                } else if (styleValue !== newStyleValue) {
                  style.setProperty(styleName, newStyleValue);
                }
              }
            }
          }

          break;
        }

      default:
        {
          if (namespace === undefined && name_1 in el && !NO_TOUCH.has(name_1)) {
            el[name_1] = newValue;
            break;
          } else if (newValue === true) {
            el.setAttribute(name_1, "");
          } else if (newValue === false || newValue == null) {
            el.removeAttribute(name_1);
          } else {
            el.setAttribute(name_1, newValue);
          }

          break;
        }
    }
  }
}

function updateChildren(el, newChildren, dirtyStart) {
  if (newChildren.length === 0) {
    el.textContent = "";
    return;
  }

  var oldChild = newChildren[dirtyStart] === undefined ? el.firstChild : newChildren[dirtyStart];
  var ni = dirtyStart || 0;

  while (oldChild !== null && ni < newChildren.length) {
    var newChild = newChildren[ni];

    if (oldChild === newChild) {
      oldChild = oldChild.nextSibling;
      ni++;
    } else if (typeof newChild === "string") {
      if (oldChild.splitText !== undefined) {
        oldChild.nodeValue = newChild;
        oldChild = oldChild.nextSibling;
      } else {
        el.insertBefore(document.createTextNode(newChild), oldChild);
      }

      ni++;
    } else if (oldChild.splitText !== undefined) {
      var nextSibling = oldChild.nextSibling;
      el.removeChild(oldChild);
      oldChild = nextSibling;
    } else {
      el.insertBefore(newChild, oldChild);
      ni++; // TODO: this is an optimization for the js frameworks benchmark
      // swap rows, but we need to think a little more about other
      // pathological cases.

      if (oldChild !== newChildren[ni]) {
        var nextSibling = oldChild.nextSibling;
        el.removeChild(oldChild);
        oldChild = nextSibling;
      }
    }
  }

  while (oldChild !== null) {
    var nextSibling = oldChild.nextSibling;
    el.removeChild(oldChild);
    oldChild = nextSibling;
  }

  for (; ni < newChildren.length; ni++) {
    var newChild = newChildren[ni];
    el.appendChild(typeof newChild === "string" ? document.createTextNode(newChild) : newChild);
  }
}

function createDocumentFragmentFromHTML(html) {
  if (typeof document.createRange === "function") {
    return document.createRange().createContextualFragment(html);
  } else {
    var fragment = document.createDocumentFragment();
    var childNodes = new DOMParser().parseFromString(html, "text/html").body.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      fragment.appendChild(childNodes[i]);
    }

    return fragment;
  }
} // TODO: Environment type should probably be Element | DocumentFragment


var env = (_a = {}, _a[_indexE4c589c.D] = function (tag) {
  if (typeof tag !== "string") {
    throw new Error("Unknown tag: " + tag.toString());
  }

  var cachedEl;
  return function defaultDOM() {
    var ns, el, props, oldLength, _a, _b, nextProps, e_1_1;

    var e_1, _c;

    return (0, _indexE4c589c._)(this, function (_d) {
      switch (_d.label) {
        case 0:
          ns = tag === "svg" ? SVG_NAMESPACE : this.scope;

          if (cachedEl === undefined) {
            if (ns == null) {
              cachedEl = document.createElement(tag);
            } else {
              cachedEl = document.createElementNS(ns, tag);
            }
          }

          el = cachedEl.cloneNode();
          props = {};
          oldLength = 0;
          _d.label = 1;

        case 1:
          _d.trys.push([1,, 10, 11]);

          _d.label = 2;

        case 2:
          _d.trys.push([2, 7, 8, 9]);

          _a = (0, _indexE4c589c.e)(this), _b = _a.next();
          _d.label = 3;

        case 3:
          if (!!_b.done) return [3
          /*break*/
          , 6];
          nextProps = _b.value; // We can’t use referential identity of props because we don’t have any
          // restrictions like elements have to be immutable.

          if (this.dirtyProps) {
            updateProps(el, props, nextProps, ns);
          }

          if (this.dirtyChildren && nextProps.innerHTML === undefined && (oldLength > 0 || nextProps.children.length > 0)) {
            updateChildren(el, nextProps.children, this.dirtyStart);
          }

          props = nextProps;
          oldLength = nextProps.children.length;
          return [4
          /*yield*/
          , el];

        case 4:
          _d.sent();

          _d.label = 5;

        case 5:
          _b = _a.next();
          return [3
          /*break*/
          , 3];

        case 6:
          return [3
          /*break*/
          , 9];

        case 7:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 9];

        case 8:
          try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
          } finally {
            if (e_1) throw e_1.error;
          }

          return [7
          /*endfinally*/
          ];

        case 9:
          return [3
          /*break*/
          , 11];

        case 10:
          if (this.dirtyRemoval && el.parentNode !== null) {
            el.parentNode.removeChild(el);
          }

          return [7
          /*endfinally*/
          ];

        case 11:
          return [2
          /*return*/
          ];
      }
    });
  };
}, _a[_indexE4c589c.R] = function (_a) {
  var fragment, _b, _c, newValue, e_2_1;

  var e_2, _d;

  var value = _a.value;
  return (0, _indexE4c589c._)(this, function (_e) {
    switch (_e.label) {
      case 0:
        _e.trys.push([0, 7, 8, 9]);

        _b = (0, _indexE4c589c.e)(this), _c = _b.next();
        _e.label = 1;

      case 1:
        if (!!_c.done) return [3
        /*break*/
        , 6];
        newValue = _c.value.value;
        if (!(typeof value === "string")) return [3
        /*break*/
        , 3];

        if (fragment === undefined || value !== newValue) {
          fragment = createDocumentFragmentFromHTML(value);
          value = newValue;
        } // TODO: figure out what the type of this Environment actually is


        return [4
        /*yield*/
        , fragment];

      case 2:
        // TODO: figure out what the type of this Environment actually is
        _e.sent();

        return [3
        /*break*/
        , 5];

      case 3:
        fragment = undefined;
        return [4
        /*yield*/
        , value];

      case 4:
        _e.sent();

        _e.label = 5;

      case 5:
        _c = _b.next();
        return [3
        /*break*/
        , 1];

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        e_2_1 = _e.sent();
        e_2 = {
          error: e_2_1
        };
        return [3
        /*break*/
        , 9];

      case 8:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }

        return [7
        /*endfinally*/
        ];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}, _a[_indexE4c589c.P] = function (_a) {
  var _b, _c, _d, newRoot, children, e_3_1;

  var e_3, _e;

  var root = _a.root;
  return (0, _indexE4c589c._)(this, function (_f) {
    switch (_f.label) {
      case 0:
        if (root == null) {
          throw new TypeError("Portal element is missing root node");
        }

        _f.label = 1;

      case 1:
        _f.trys.push([1,, 10, 11]);

        _f.label = 2;

      case 2:
        _f.trys.push([2, 7, 8, 9]);

        _b = (0, _indexE4c589c.e)(this), _c = _b.next();
        _f.label = 3;

      case 3:
        if (!!_c.done) return [3
        /*break*/
        , 6];
        _d = _c.value, newRoot = _d.root, children = _d.children;

        if (newRoot == null) {
          throw new TypeError("Portal element is missing root node");
        }

        if (root !== newRoot) {
          updateChildren(root, []);
          root = newRoot;
          updateChildren(root, children);
        } else if (this.dirtyChildren) {
          updateChildren(root, children);
        }

        return [4
        /*yield*/
        , root];

      case 4:
        _f.sent();

        _f.label = 5;

      case 5:
        _c = _b.next();
        return [3
        /*break*/
        , 3];

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        e_3_1 = _f.sent();
        e_3 = {
          error: e_3_1
        };
        return [3
        /*break*/
        , 9];

      case 8:
        try {
          if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }

        return [7
        /*endfinally*/
        ];

      case 9:
        return [3
        /*break*/
        , 11];

      case 10:
        updateChildren(root, []);
        return [7
        /*endfinally*/
        ];

      case 11:
        return [2
        /*return*/
        ];
    }
  });
}, _a[_indexE4c589c.S] = {
  svg: SVG_NAMESPACE,
  foreignObject: undefined
}, _a);
exports.env = env;

var DOMRenderer =
/** @class */
function (_super) {
  (0, _indexE4c589c.d)(DOMRenderer, _super);

  function DOMRenderer() {
    return _super.call(this, env) || this;
  }

  return DOMRenderer;
}(_indexE4c589c.b);

exports.DOMRenderer = DOMRenderer;
var renderer = new DOMRenderer();
exports.renderer = renderer;
},{"./index-e4c589c1.js":"../../node_modules/@bikeshaving/crank/esm/index-e4c589c1.js"}],"../../node_modules/@bikeshaving/crank/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./esm/dom.js");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});
},{"./esm/dom.js":"../../node_modules/@bikeshaving/crank/esm/dom.js"}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"js/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;

var _crank = require("@bikeshaving/crank");

var _App = require("./App");

/** @jsx createElement */
function Header() {
  return (0, _crank.createElement)("header", null, (0, _crank.createElement)(NavBar, null));
}

function Link(_ref) {
  var _this = this;

  var name = _ref.name,
      text = _ref.text;

  var handleClick = function handleClick() {
    var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?site=' + name;
    window.history.pushState({
      path: refresh
    }, '', refresh);
    console.log(refresh);
    var ev = new CustomEvent("refreshContent", {
      bubbles: true,
      detail: {
        site: name
      }
    });
    console.log(ev);

    _this.dispatchEvent(ev);
  };

  this.addEventListener("click", function (ev) {
    console.log(ev.target);

    if (ev.target.tagName === "A" && ev.target.className === "navlink") {
      handleClick(ev.target.dataset.name);

      _this.refresh();
    }
  });
  return (0, _crank.createElement)("a", {
    class: "navlink",
    "data-name": name
  }, text);
}

function NavBar() {
  return (0, _crank.createElement)("nav", null, (0, _crank.createElement)("div", {
    class: "nav-wrapper"
  }, (0, _crank.createElement)("a", {
    href: "#",
    class: "brand-logo"
  }, "Logo"), (0, _crank.createElement)("ul", {
    id: "nav-mobile",
    class: "right hide-on-med-and-down"
  }, (0, _crank.createElement)("li", null, (0, _crank.createElement)(Link, {
    name: "index",
    text: "Home"
  })), (0, _crank.createElement)("li", null, (0, _crank.createElement)(Link, {
    name: "create",
    text: "New plan"
  })))));
}
},{"@bikeshaving/crank":"../../node_modules/@bikeshaving/crank/esm/index.js","./App":"js/components/App.js"}],"js/components/Plan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plan = Plan;

var _crank = require("@bikeshaving/crank");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Plan(_x) {
  return _Plan.apply(this, arguments);
}

function _Plan() {
  _Plan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$id, id, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$id = _ref.id, id = _ref$id === void 0 ? -1 : _ref$id;
            data = {};

            if (!(id > 0)) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return loadPlan(id);

          case 5:
            data = _context.sent;

          case 6:
            return _context.abrupt("return", (0, _crank.createElement)("div", null, "Plan"));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Plan.apply(this, arguments);
}

function loadPlan(_x2) {
  return _loadPlan.apply(this, arguments);
}

function _loadPlan() {
  _loadPlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref2.id;
            return _context2.abrupt("return", true);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadPlan.apply(this, arguments);
}
},{"@bikeshaving/crank":"../../node_modules/@bikeshaving/crank/esm/index.js"}],"js/components/Body.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = Content;

var _crank = require("@bikeshaving/crank");

var _Plan = require("./Plan");

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function Content(_x) {
  return _Content.apply(this, arguments);
}

function _Content() {
  _Content = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$throttle, throttle, _ref$site, site, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2, query;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$throttle = _ref.throttle, throttle = _ref$throttle === void 0 ? false : _ref$throttle, _ref$site = _ref.site, site = _ref$site === void 0 ? "index" : _ref$site;
            _context.next = 3;
            return _awaitAsyncGenerator(new Promise(function (resolve) {
              return setTimeout(resolve, 3000);
            }));

          case 3:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 5;
            _iterator = _asyncIterator(this);

          case 7:
            _context.next = 9;
            return _awaitAsyncGenerator(_iterator.next());

          case 9:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 13;
            return _awaitAsyncGenerator(_step.value);

          case 13:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 38;
              break;
            }

            _value2 = _value;
            site = _value2.site;
            _context.t0 = site;
            _context.next = _context.t0 === "create" ? 20 : _context.t0 === "load" ? 23 : 32;
            break;

          case 20:
            _context.next = 22;
            return (0, _crank.createElement)(_Plan.Plan, null);

          case 22:
            return _context.abrupt("break", 35);

          case 23:
            query = new URLSearchParams(window.location.search);

            if (!query.has("id")) {
              _context.next = 29;
              break;
            }

            _context.next = 27;
            return (0, _crank.createElement)(_Plan.Plan, {
              id: query.get("id")
            });

          case 27:
            _context.next = 31;
            break;

          case 29:
            _context.next = 31;
            return (0, _crank.createElement)(_Plan.Plan, null);

          case 31:
            return _context.abrupt("break", 35);

          case 32:
            _context.next = 34;
            return (0, _crank.createElement)("div", null, "Welcome");

          case 34:
            return _context.abrupt("break", 35);

          case 35:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 38:
            _context.next = 44;
            break;

          case 40:
            _context.prev = 40;
            _context.t1 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 44:
            _context.prev = 44;
            _context.prev = 45;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 49;
              break;
            }

            _context.next = 49;
            return _awaitAsyncGenerator(_iterator.return());

          case 49:
            _context.prev = 49;

            if (!_didIteratorError) {
              _context.next = 52;
              break;
            }

            throw _iteratorError;

          case 52:
            return _context.finish(49);

          case 53:
            return _context.finish(44);

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[5, 40, 44, 54], [45,, 49, 53]]);
  }));
  return _Content.apply(this, arguments);
}
},{"@bikeshaving/crank":"../../node_modules/@bikeshaving/crank/esm/index.js","./Plan":"js/components/Plan.js"}],"js/components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _crank = require("@bikeshaving/crank");

/** @jsx createElement */
function Footer() {
  return (0, _crank.createElement)("footer", {
    class: "page-footer"
  }, (0, _crank.createElement)("div", {
    class: "container"
  }, (0, _crank.createElement)("div", {
    class: "row"
  }, (0, _crank.createElement)("div", {
    class: "col l6 s12"
  }, (0, _crank.createElement)("h5", {
    class: "white-text"
  }, "Footer Content"), (0, _crank.createElement)("p", {
    class: "grey-text text-lighten-4"
  }, "You can use rows and columns here to organize your footer content.")), (0, _crank.createElement)("div", {
    class: "col l4 offset-l2 s12"
  }, (0, _crank.createElement)("h5", {
    class: "white-text"
  }, "Links"), (0, _crank.createElement)("ul", null, (0, _crank.createElement)("li", null, (0, _crank.createElement)("a", {
    class: "grey-text text-lighten-3",
    href: "https://github.com/Heiss/PartyPlaner"
  }, "Github")), (0, _crank.createElement)("li", null, (0, _crank.createElement)("a", {
    class: "grey-text text-lighten-3",
    href: "https://netzmuffel.de"
  }, "Blog")))))), (0, _crank.createElement)("div", {
    class: "footer-copyright"
  }, (0, _crank.createElement)("div", {
    class: "container"
  }, "\xA9 2020 by Heiss")));
}
},{"@bikeshaving/crank":"../../node_modules/@bikeshaving/crank/esm/index.js"}],"js/components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _crank = require("@bikeshaving/crank");

var _dom = require("@bikeshaving/crank/dom");

var _regeneratorRuntime = require("regenerator-runtime");

var _Header = require("./Header");

var _Body = require("./Body");

var _Footer = require("./Footer");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(App);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function LoadingIndicator() {
  return _LoadingIndicator.apply(this, arguments);
}

function _LoadingIndicator() {
  _LoadingIndicator = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 1000);
            });

          case 2:
            console.log("Show loading ind");
            return _context3.abrupt("return", (0, _crank.createElement)("div", null, "Loading..."));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _LoadingIndicator.apply(this, arguments);
}

function ContentLoader(_x) {
  return _ContentLoader.apply(this, arguments);
}

function _ContentLoader() {
  _ContentLoader = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var site, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            site = _ref.site;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(this);

          case 5:
            _context.next = 7;
            return _awaitAsyncGenerator(_iterator.next());

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _awaitAsyncGenerator(_step.value);

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 22;
              break;
            }

            _value2 = _value;
            site = _value2.site;
            _context.next = 17;
            return (0, _crank.createElement)(LoadingIndicator, null);

          case 17:
            _context.next = 19;
            return (0, _crank.createElement)(_Body.Content, {
              site: site
            });

          case 19:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 22:
            _context.next = 28;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 28:
            _context.prev = 28;
            _context.prev = 29;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 33;
              break;
            }

            _context.next = 33;
            return _awaitAsyncGenerator(_iterator.return());

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(28);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 24, 28, 38], [29,, 33, 37]]);
  }));
  return _ContentLoader.apply(this, arguments);
}

function App(_ref2) {
  var _this = this;

  var _ref2$site, site;

  return regeneratorRuntime.wrap(function App$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref2$site = _ref2.site, site = _ref2$site === void 0 ? "index" : _ref2$site;
          this.addEventListener("refreshContent", function (ev) {
            site = ev.detail.site;

            _this.refresh();
          });

        case 2:
          if (!true) {
            _context2.next = 7;
            break;
          }

          _context2.next = 5;
          return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_Header.Header, null), (0, _crank.createElement)(ContentLoader, {
            throttle: "true",
            site: site
          }), (0, _crank.createElement)(_Footer.Footer, null));

        case 5:
          _context2.next = 2;
          break;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this);
}

function render() {
  var site = "index";
  var query = new URLSearchParams(window.location.search);

  if (query.has("site")) {
    site = query.get("site");
  }

  _dom.renderer.render((0, _crank.createElement)(App, {
    site: site
  }), document.body);
}

function bootstrap() {
  render();
}

bootstrap();
},{"@bikeshaving/crank":"../../node_modules/@bikeshaving/crank/esm/index.js","@bikeshaving/crank/dom":"../../node_modules/@bikeshaving/crank/dom.js","regenerator-runtime":"node_modules/regenerator-runtime/runtime.js","./Header":"js/components/Header.js","./Body":"js/components/Body.js","./Footer":"js/components/Footer.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40111" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/components/App.js"], null)
//# sourceMappingURL=/App.fee8479e.js.map