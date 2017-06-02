
var LBI = window.LBI || {};

 LBI.Utility = {
 PI : 3.14	,
 add : function( a, b) {
 	return a+b;
 },

 sub : function( a, b) {
 	return a-b;
 },

 getCircumference : function (radius) {
   console.log("PI is :",PI);
   return 2*PI*radius;
}

 };

export {LBI}  ;