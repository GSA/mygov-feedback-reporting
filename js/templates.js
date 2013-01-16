this["JST"] = this["JST"] || {};

this["JST"]["domain"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
}
return __p;
};

this["JST"]["domains"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<ul id="domains">\n';
 domains.each( function(domain) { 
;__p+='\n  <li>'+
( domain.get("hostname") )+
'</li>\n';
 }); 
;__p+='\n</ul>';
}
return __p;
};

this["JST"]["home"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h1>MyGovBar Feedback</h1>\n\n<form>\n  <label>Query:<input type="text" name="query" /></label>\n  <input type="button" value="submit" />\n</form>';
}
return __p;
};

this["JST"]["page"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
}
return __p;
};

this["JST"]["pages"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
}
return __p;
};