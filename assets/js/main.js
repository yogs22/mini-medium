var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-top").style.marginTop = "0";
  } else {
    document.getElementById("nav-top").style.marginTop = "-50px";
  }
  prevScrollpos = currentScrollPos;
}