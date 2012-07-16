//generate unique user token for sharing and identification
//stash in localStorage.
var uid = localStorage.getItem('id');
if (uid && uid.length > 3) {
  var uid = Math.floor((Math.random()*Math.pow(10,16)) + 1).toString() + 
            Math.floor((Math.random()*Math.pow(10,16)) + 1).toString();
  localStorage.setItem('id', uid);
}

