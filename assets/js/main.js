var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav-top').style.marginTop = '0';
  } else {
    document.getElementById('nav-top').style.marginTop = '-50px';
  }
  prevScrollpos = currentScrollPos;
}

function showSidebar() {
	document.getElementById('sidebar').style.marginLeft = '0';
	document.getElementById('sidebar-overlay').style.display = 'block';
}

function hideSidebar() {
	document.getElementById('sidebar').style.marginLeft = '-300px';
	document.getElementById('sidebar-overlay').style.display = 'none';
}

window.addEventListener("load", function(event) {
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("collapsible-active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    } 
	  });
	}
});