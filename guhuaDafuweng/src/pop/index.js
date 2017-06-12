import '../style/vue-pop';
Vue.component('pop', {
    render: function(h) {
        var self = this;
        return h('transition',
        	{
        		attrs:{
        			'name' : self.transition,
        		}
        	},
        	[
	        	h('div', 
	        		{
		                'class': self.superClass,
		                staticClass: 'modal-mask',
		                directives: [{
		                    name: "show",
		                    rawName: "v-show",
		                    value: (self.showModal),
		                    //expression: "dashboard"
		                }],
		                on : {
		                	click : self.closePop
		                }
	            	},
	            	[
	            		h('div',
	            			{
	            				staticClass:'modal-wrapper',
	            				on : {
	            					click : self.closePropagtion
	            				}
	            			},
	            			[
	            				this.$slots.main
	            			]
	            		)
	            	]
	            ),
        	]
        )
    },
    data() {
        return {
            showModal: true,
        }
    },
    props: {
        superClass: String,
        transition: String,
        closeCallback: Function,
    },
    methods: {
    	closePropagtion : function( e ){
            e.stopPropagation();  //
        },
        showPop : function(callback){
            this.showModal = true;
            if($.type(callback) == 'function'){
                setTimeout(callback,500)
            }
        },
        closePop : function( callback ){
            this.showModal = false;
            setTimeout(()=>{
            	$(this.$el).remove();
            },510);
            if($.type(callback) == 'function'){
                setTimeout(callback,500)
            }
            this.closeCallback && this.closeCallback.call(this);
        }
    }
})