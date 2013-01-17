this["JST"] = this["JST"] || {};

this["JST"]["domain"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h3>'+
( domain.hostname )+
'</h3>\n<ul class="pages">\n  ';
 _.each( domain.pages, function(page){ 
;__p+='\n    <li class="page"><a href="#page/'+
( page.id )+
'">'+
( page.title || "(no title)" )+
'</a> &mdash; '+
( page.avg_rating || "n/a" )+
'\n  ';
 }) 
;__p+='\n</ul>\n';
}
return __p;
};

this["JST"]["domains"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<ul id="domains">\n';
 _.each( domains, function(domain) { 
;__p+='\n  <li class="domain">\n    <a href="#domains/'+
( domain.id )+
'">'+
( domain.hostname )+
'</a>\n  </li>\n';
 }); 
;__p+='\n</ul>';
}
return __p;
};

this["JST"]["home"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h1>MyGovBar Feedback</h1>\n\n<form>\n  <label>Query:<input type="text" name="query" id="query" /></label>\n  <input type="submit" value="submit" />\n</form>';
}
return __p;
};

this["JST"]["page"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h2>'+
( page.title )+
'</h2>\n\n<h3>Page Stats</h3>\n<ul id="page_stats">\n  <li><strong>URL:</strong> '+
( page.url )+
'</li>\n  <li><strong>Average Rating:</strong> '+
( page.avg_rating )+
'</li>\n  <li><strong>Domain:</strong> <a href="#domain/'+
( page.domain.id )+
'">'+
( page.domain.hostname )+
'</a></li>\n  <li><strong>Path:</strong> '+
( page.path )+
'</li>\n</ul>\n\n<h3>Similar Pages</h3>\n<ul id="related">\n  ';
 _.each( page.related, function(related){ 
;__p+='\n    <li><a href="#pages/'+
( related.id )+
'">'+
( related.title )+
'</a></li>\n  ';
 }) 
;__p+='\n</ul>\n\n<h3>Comments</h3>';
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