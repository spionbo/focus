module.exports = function( elementName , _data , name ){
    name = name||elementName;
    _data = _data || {
        props: {
            transition : 'rotate3d'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        },
    };
    require.ensure([],(require)=>{
        $('<div class="child">').appendTo('#pop');
        Vue.component(
          elementName,
          () => System.import('./'+name+'.vue')
        );
        new Vue({
            el : '#pop .child' , 
            render(h){
                return h(elementName,{..._data})
            }
        });
    });
}