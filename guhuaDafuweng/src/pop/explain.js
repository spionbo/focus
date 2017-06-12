module.exports = function( name ){
    Vue.component(name, {
        render: function(h) {
            var self = this;
            return h('pop',
                {
                    ref : "pop",
                    props : {
                        'transition' : self.transition
                    },
                },
                [
                    h("div",
                        {
                            staticClass : "explain img-size",
                            attrs: {
                                "data-width": "655",
                                "data-height": "947"
                            },
                            style : {
                                backgroundImage : 'url('+require('../images/explain.png')+')',
                                backgroundSize : 'contain',
                                backgroundRepeat : 'no-repeat',
                                width:'20rem',
                                height:'20rem',
                                position:'relative',
                                zIndex:999
                            },
                            slot : "main"
                        },
                        [
                            h("div",{
                                staticClass : "close img-size",
                                attrs : {
                                    "data-width": "84",
                                    "data-height": "84"
                                },
                                style : {
                                    position:'absolute',
                                    top:0,
                                    right:0
                                },
                                on : {
                                    "click" : self.close
                                }
                            })
                        ]
                    )
                ]
            )
        },
        props: {
            transition : String
        },
        mounted(){
            T.setImgSize();
        },
        methods: {
            close: function close() {
                this.$refs.pop.closePop();
                this.okCallback && this.okCallback.call(this);
            }
        }
    });
}