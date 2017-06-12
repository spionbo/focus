module.exports = function( elementName , _data , name ){
    name = name||elementName;
    if(!_data){
        _data = {
            props : {
                transition : 'rotate3d'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
            }
        }
    }else{
        _data.props.transition = _data.props.transition || 'rotate3d'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
    }
    require.ensure([],(require)=>{
        $('<div class="child">').appendTo('#app');
        Vue.component(
          elementName,
          () => System.import('./'+name+'.vue')
        );
        new Vue({
            el : '#app .child' , 
            render(h){
                return h(elementName,{..._data})
            }
        });
    });
}