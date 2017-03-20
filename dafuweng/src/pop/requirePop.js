module.exports = function( elementName , _data , name ){
    name = name||elementName;
    _data = _data || {
        props: {
            transition : 'bounceIn'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        },
    };
    require.ensure([],(require)=>{
        Vue.component(
          elementName,
          () => System.import('../pop/'+name+'.vue')
        );
        new Vue({
            el : '#pop .child' , 
            render(h){
                return h(elementName,_data)
            }
        });
    });
}