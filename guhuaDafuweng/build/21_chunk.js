webpackJsonp([21,23],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, $) {

__webpack_require__(14);

Vue.component('Tips', {
    render: function render(h) {
        var self = this;
        return h('transition', {
            attrs: {
                name: self.transition
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
        closePop: function closePop() {
            var _this = this;

            this.showModal = false;
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
            this.closeCallback && this.closeCallback.call(this);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1)))

/***/ })

});
//# sourceMappingURL=21_chunk.js.map?name=77af54542a51cd3ae531