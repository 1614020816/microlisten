
const str = "http://localhost:3000/"

const getAjax = function(url, obj, fn) {
    obj.get(str + url).then(fn);
}

export {getAjax}

// var url = "http://localhost:3000/top/album?offset=0&limit=5";
// this.$http.get(url).then(function(data){
//     this.album1 = data.body.albums;
// });