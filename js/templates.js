this["JST"] = this["JST"] || {};

this["JST"]["comments"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<ul id="comments">\n  ';
 _.each( comments, function(comment){ 
;__p+='\n    <li class="comment">\n      <div class="body">'+
( comment.body )+
'</div>\n      <div class="meta">'+
( moment(comment.created_at).fromNow() )+
'</div>\n    </li>\n  ';
 }) 
;__p+='\n</li>';
}
return __p;
};

this["JST"]["domain"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h3>'+
( domain.hostname )+
'</h3>\n<ul class="pages">\n  ';
 _.each( domain.pages, function(page){ 
;__p+='\n    <li class="page"><a href="#pages/'+
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
__p+='<h2>Domains matching "'+
( query )+
'"</h2>\n\n<ul id="domains">\n';
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
__p+='<div class="row">\n  <div class="span row4 offset4">\n    <p>Search by reverse domain to begin <em>e.g.,</em> <code>gov.whitehouse.</code></p>\n    \n    <form class="form-search">\n      <input type="text" name="query" id="query" value="gov." class="input-medium search-query" />\n      <input type="submit" class="btn" value = "search" />\n    </form>\n  </div>\n</div>';
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
' ('+
( page.num_rating )+
')</li>\n  <li><strong>Domain:</strong> <a href="#domains/'+
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
;__p+='\n</ul>\n\n<h3>Comments</h3>\n<div id="commentsDiv">\n</div>';
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