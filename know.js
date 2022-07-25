window.onload = function(){
  /*true则pc，false则mobile*/
  let u = navigator.userAgent;
  let Agents = ["Android", "iPhone", "webOS", "BlackBerry", "SymbianOS", "Windows Phone",  "iPod"];
  let flag = false;
  for (let i = 0; i < Agents.length; i++) {
    if (u.indexOf(Agents[i]) > 0) {
      flag = false;
      window.open("http://www.jinjieup.tk/phone/index.html", "_self");
    }
    else {
      flag = true;
    }
  }
}