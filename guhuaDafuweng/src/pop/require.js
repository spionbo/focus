module.exports = function( elementName , _data , name ){
    name = name||elementName;
    _data = _data || {
        props: {
            transition : 'fadeIn'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        },
    };
    require.ensure([],(require)=>{
        var component = require('./'+name+'.js');
        component(elementName);
        $('<div class="child">').appendTo('#pop');
        new Vue({
            el : '#pop .child' , 
            render(h){
                return h(elementName,_data)
            }
        });
    });
}