/**
 * Created by Administrator on 2017/5/27.
 */
/*var name = 'yangyang'; //commonjs规范
module.exports = name;*/
//let name = 'xiaoyang'; //es6规范
//export default name;

var $ =require('./lib/jquery');

var common = {
    getList:function(){
        $.ajax({
            url:'/api/list',
            success:function(res){
                console.log(res);
            }
        })
    }
}

module.exports = common;

