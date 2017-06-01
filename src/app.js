/**
 * Created by Administrator on 2017/5/26.
 */
require('./styles/app.scss');

var string = require('./scripts/common');
console.log(string);

// import Name from './scripts/common.js';
// console.log(Name);

/*var common = require('./scripts/common');
common.getList();*/


var comm = require('./scripts/common');
var html = require('./scripts/tpls/home.html');
console.log(html)
comm.render(html);

//comm.render('<div>qwert</div>');