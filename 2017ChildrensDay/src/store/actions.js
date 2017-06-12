export const getInfo = ({ commit },$store) => {
   return new Promise((resolve, reject) => {
        commit('getInfo',function(){
            resolve();
        });
    });
}