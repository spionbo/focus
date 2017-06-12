webpackJsonp([0],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  "data-v-efe594c4",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\module\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efe594c4", Component.options)
  } else {
    hotAPI.reload("data-v-efe594c4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.2.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["default"] = index_esm;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  "data-v-081bd19c",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\components\\ladder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ladder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-081bd19c", Component.options)
  } else {
    hotAPI.reload("data-v-081bd19c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _step = __webpack_require__(72);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        step: _step2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _ladder = __webpack_require__(34);

var _ladder2 = _interopRequireDefault(_ladder);

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

var _vuex = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({
    store: _store2.default,
    components: {
        ladder: _ladder2.default
    },

    computed: _extends({}, (0, _vuex.mapState)({
        currentPointMonth: function currentPointMonth(state) {

            if (state.round > 1 && state.currentPointMonth == 0) {
                state.currentPointMonth = 1;
            }
            return state.currentPointMonth;
        }
    })),
    props: {
        num: Number
    },
    data: function data() {
        return {
            width: 132,
            height: 113,
            text: false
        };
    }
}, 'computed', {
    classObject: function classObject() {
        var num = this.num,
            text = '';
        if (num == 7) {
            this.text = 5;
        } else if (num == 11) {
            this.text = 2;
        } else if (num == 15) {
            this.text = 2;
        } else if (num == 19) {
            this.text = 5;
        }
        if (num == 10 || num == 20) {
            this.width = 113;
            return 'luck-draw';
        };
        if (num > 23 || num < 5) {
            //24 1 2 3 4
            if (num == 1) {
                text = 'bottom first';
            } else if (num == 2) {
                text = 'bottom double';
            } else if (num == 3) {
                text = 'bottom';
            } else if (num == 24) {
                text = 'bottom _left';
            } else if (num == 4) {
                text = 'bottom _right';
            }
        } else if (num > 16) {
            //17 - 23
            this.width = 100;
            this.height = 111;
            if (num % 2 == 0) {
                text = 'left double';
            } else {
                text = 'left';
            }
        } else if (num > 11) {
            //16 - 12
            if (num % 2 == 0) {
                text = 'top double';
            } else {
                text = 'top';
            }
            if (num == 16) {
                this.width = 133;
                text = 'top _left';
            } else if (num == 12) {
                this.width = 133;
                text = 'top _right';
            }
        } else if (num > 4) {
            //5 - 11
            this.width = 100;
            this.height = 111;
            if (num % 2 == 0) {
                text = 'left double';
            } else {
                text = 'left';
            }
        }
        if (num == this.$store.state.currentPoint) {
            text += ' active';
        }
        return text;
    }
});

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import compontentLoad from '../pop/require.js';


var _ladder = __webpack_require__(34);

var _ladder2 = _interopRequireDefault(_ladder);

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _vuex = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        ladder: _ladder2.default
    },
    computed: _extends({
        through: function through() {
            var text = '',
                status = this.$store.state.status;
            if (status == -1) {
                text = '大富翁活动还未开始，敬请期待。';
            } else if (status == 0) {
                text = '本期活动（4.21~5.4）期间，积分兑换奖品，限量兑换，先换先得，换完为止，请注意兑换时间！';
            } else {
                text = '大富翁活动已结束！';
            }
            return text;
        }
    }, (0, _vuex.mapState)(['round', 'diceRemainChance', 'currentPoint', 'roundMonth', 'currentPointMonth', 'integral'])),
    mounted: function mounted() {
        T.setImgSize();

        var htxt = $('.htxt'),
            height = htxt.height(),
            len = htxt.find('.h').length / 2,
            h = htxt.find('.h').eq(0).height(),
            percent = 0;

        function go() {
            percent++;
            htxt.css({ '-webkit-transform': 'translateY(' + -h * percent + 'px)' });
            if (percent >= len) {
                setTimeout(function () {
                    htxt.css({ '-webkit-transform': 'translateY(0px)', '-webkit-transition-duration': '0s' });
                    percent = 0;
                    setTimeout(function () {
                        htxt.css({ '-webkit-transition-duration': '.5s' });
                    }, 20);
                }, 510);
            }

            setTimeout(go, 2500);
        }
        go();
    },

    methods: {
        explain: function explain() {
            /*compontentLoad('explain',{
                props : {
                    transition : 'fadeIn'
                }
            })
            return;*/
            (0, _requirePop2.default)('explain', {
                props: {
                    transition: 'fadeIn'
                }
            });
        },
        gameStart: function gameStart() {
            if (this.diceRemainChance > 0) {
                (0, _requirePop2.default)('gameStart', {
                    props: {
                        transition: 'rotate3d'
                    }
                }, 'selectScene');
            } else {
                if (!T.uid) {
                    (0, _requirePop2.default)('gologin', {
                        props: {
                            content: '对不起，请登录后再操作。',
                            transition: 'rotate3d',
                            okTxt: '去登录',
                            okCallback: function okCallback() {
                                T.login();
                            }
                        }
                    }, 'publicTips');
                } else {
                    (0, _requirePop2.default)('juedao', {
                        props: {
                            content: '对不起，您的剩余骰子数为0',
                            transition: 'rotate3d',
                            okTxt: '去投资获取机会',
                            okCallback: function okCallback() {
                                T.callApp.investment();
                            }
                        }
                    }, 'publicTips');
                }
            }
        },
        investment: function investment() {
            T.callApp.investment();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  "data-v-2c8cbfc6",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\components\\step.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] step.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c8cbfc6", Component.options)
  } else {
    hotAPI.reload("data-v-2c8cbfc6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "ladder img-size",
    attrs: {
      "data-width": "660"
    }
  }, [_c('div', {
    staticClass: "top"
  }, _vm._l((5), function(index) {
    return _c('step', {
      attrs: {
        "num": 17 - index
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_c('div', {
    staticClass: "left"
  }, _vm._l((7), function(index) {
    return _c('step', {
      attrs: {
        "num": index + 16
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, _vm._l((7), function(index) {
    return _c('step', {
      attrs: {
        "num": 12 - index
      }
    })
  }))]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('step', {
    attrs: {
      "num": "24"
    }
  }), _vm._v(" "), _vm._l((4), function(index) {
    return _c('step', {
      attrs: {
        "num": index
      }
    })
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-081bd19c", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "step img-size",
    class: _vm.classObject,
    attrs: {
      "data-num": _vm.num,
      "data-fontSize": "34",
      "data-width": _vm.width,
      "data-height": _vm.height
    }
  }, [(_vm.num != 10 && _vm.num != 20) ? _c('div', [(_vm.text) ? _c('p', {
    staticClass: "text img-size",
    attrs: {
      "data-fontSize": "19"
    }
  }, [_vm._v("送" + _vm._s(_vm.text) + "积分")]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.num))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.$store.state.currentPointMonth == _vm.num),
      expression: "this.$store.state.currentPointMonth == num"
    }],
    staticClass: "child img-size",
    attrs: {
      "data-width": "75",
      "data-height": "80",
      "data-marginLeft": "-37.5",
      "data-marginTop": "-40"
    }
  })]) : _c('div', {
    staticClass: "draw img-size",
    attrs: {
      "data-width": "61",
      "data-height": "63"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c8cbfc6", module.exports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "child-transition"
  }, [_c('div', {
    staticClass: "module-scroll bg"
  }, [_c('div', {
    staticStyle: {
      "height": "20px"
    }
  }), _vm._v(" "), _c('article', {
    staticClass: "module img-size",
    attrs: {
      "data-height": "1334"
    }
  }, [_c('div', {
    staticClass: "main img-size",
    attrs: {
      "data-width": "686",
      "data-height": "1032"
    }
  }, [_c('ladder')], 1), _vm._v(" "), _c('div', {
    staticClass: "ttdwf img-size",
    attrs: {
      "data-width": "464",
      "data-height": "404",
      "data-left": "150",
      "data-top": "180"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "my-game-number img-size",
    attrs: {
      "data-left": "176",
      "data-top": "500",
      "data-width": "395",
      "data-height": "87",
      "data-lineHeight": "87"
    }
  }, [_vm._v("\r\n                剩余骰子数："), _c('em', [_vm._v(_vm._s(_vm.diceRemainChance))])]), _vm._v(" "), _c('div', {
    staticClass: "bottom-bg img-size",
    attrs: {
      "data-width": "458",
      "data-height": "110",
      "data-left": "148",
      "data-top": "800",
      "data-paddingTop": "60",
      "data-paddingLeft": "57"
    }
  }, [_c('div', {
    staticClass: "text img-size",
    attrs: {
      "data-fontSize": "30",
      "data-width": "343",
      "data-height": "46"
    }
  }, [_c('div', {
    staticClass: "htxt img-size",
    attrs: {
      "data-height": "184"
    }
  }, [_c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            您的成绩："), _c('em', [_vm._v(_vm._s(_vm.round) + "圈" + _vm._s(_vm.currentPoint) + "步(周)")])]), _vm._v(" "), _c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            您的成绩："), _c('em', [_vm._v(_vm._s(_vm.roundMonth) + "圈" + _vm._s(_vm.currentPointMonth) + "步(月)")])]), _vm._v(" "), _c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            当前积分："), _c('em', [_vm._v(_vm._s(_vm.integral))])]), _vm._v(" "), _c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            您的成绩："), _c('em', [_vm._v(_vm._s(_vm.round) + "圈" + _vm._s(_vm.currentPoint) + "步(周)")])]), _vm._v(" "), _c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            您的成绩："), _c('em', [_vm._v(_vm._s(_vm.roundMonth) + "圈" + _vm._s(_vm.currentPointMonth) + "步(月)")])]), _vm._v(" "), _c('div', {
    staticClass: "h img-size",
    attrs: {
      "data-height": "46"
    }
  }, [_vm._v("\r\n                            当前积分："), _c('em', [_vm._v(_vm._s(_vm.integral))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "book img-size",
    attrs: {
      "data-width": "93",
      "data-height": "96",
      "data-right": "161",
      "data-top": "131"
    },
    on: {
      "click": _vm.explain
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "game-do img-size",
    attrs: {
      "data-top": "601",
      "data-width": "378",
      "data-marginLeft": "-189",
      "data-height": "96"
    },
    on: {
      "click": _vm.gameStart
    }
  }, [_c('div', {
    staticClass: "do img-size",
    attrs: {
      "data-width": "73",
      "data-height": "76",
      "data-marginLeft": "60",
      "data-marginTop": "8"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "opportunity img-size",
    attrs: {
      "data-top": "710",
      "data-width": "400",
      "data-marginLeft": "-200",
      "data-fontSize": "24"
    },
    on: {
      "click": _vm.investment
    }
  }, [_vm._v("单笔投资每满5000元获得1次机会"), _c('br'), _c('em', [_vm._v("获取更多掷骰子机会")]), _c('span')])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-efe594c4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0_chunk.js.map?name=67553faf61540dba269b