webpackJsonp([19],{

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, $) {

__webpack_require__(18);

Vue.component('pop', {
    render: function render(h) {
        var self = this;
        return h('transition', {
            attrs: {
                'name': self.transition
            }
        }, [h('div', {
            'class': self.superClass,
            staticClass: 'modal-mask',
            directives: [{
                name: "show",
                rawName: "v-show",
                value: self.showModal
            }],
            on: {
                click: self.closePop
            }
        }, [h('div', {
            staticClass: 'modal-wrapper',
            on: {
                click: self.closePropagtion
            }
        }, [this.$slots.main])])]);
    },
    data: function data() {
        return {
            showModal: true
        };
    },

    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop(callback) {
            var _this = this;

            this.showModal = false;
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
            this.closeCallback && this.closeCallback.call(this);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ })

});
//# sourceMappingURL=pop_chunk.js.map?name=d59a3b1e32bc011412df