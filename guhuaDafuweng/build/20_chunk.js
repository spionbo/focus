webpackJsonp([20,21],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, T) {

module.exports = function (name) {
    Vue.component(name, {
        render: function render(h) {
            var self = this;
            return h('pop', {
                ref: "pop",
                attrs: {
                    transition: 'fadeIn'
                },
                props: {
                    transition: 'fadeIn'
                },
                directives: [{
                    name: "transition",
                    rawName: "v-bind:transition",
                    value: 'fadeIn'
                }]
            }, [h("div", {
                staticClass: "explain img-size",
                attrs: {
                    "data-width": "655",
                    "data-height": "947"
                },
                style: {
                    backgroundImage: 'url(' + __webpack_require__(68) + ')',
                    backgroundSize: 'contain',
                    width: '20rem',
                    height: '20rem',
                    position: 'relative',
                    zIndex: 999
                },
                slot: "main"
            }, [h("div", {
                staticClass: "close img-size",
                attrs: {
                    "data-width": "84",
                    "data-height": "84"
                },
                style: {
                    position: 'absolute',
                    top: 0,
                    right: 0
                },
                on: {
                    "click": self.close
                }
            })])]);
        },
        props: {
            transition: String
        },
        mounted: function mounted() {
            T.setImgSize();
        },

        methods: {
            close: function close() {
                this.$refs.pop.closePop();
                this.okCallback && this.okCallback.call(this);
            }
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/explain.png?d47028c0";

/***/ })

});
//# sourceMappingURL=20_chunk.js.map?name=1d4825b77a889ca07cdb