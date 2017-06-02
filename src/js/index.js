//import * as jquery from  '../../node_modules/jquery/dist/jquery'
var jquery= require('../../node_modules/jquery/dist/jquery');
var LBI= require('./utility');
//import LBI  from './utility'

console.log("jquery :",jquery);
console.log("utility :",LBI);

jquery("#btnCall").click(function() {
    alert("hello");
});
