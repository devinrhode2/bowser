var GET, POST;
(function globalJS(){
'use strict';

String.prototype.contains = function StringPrototypeContains(string) {
  return this.indexOf(string) > -1;
};

var ajax = {};
ajax.x = function() {
  return new XMLHttpRequest;
};
ajax.send = function(u, f, m, a) {
  var x = ajax.x();
  x.open(m, u, true);
  x.onreadystatechange = function() {
    if(x.readyState == 4) {
      f(x.responseText, x);
    }
  };
  if(m === 'POST') {
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  }
  x.send(a)
};
POST = function POST(url, callback, args) {
  ajax.send(url, func, 'POST', args);
};

GET = function GET(url, callback){
  ajax.send(url,callback,'GET');
};

}());