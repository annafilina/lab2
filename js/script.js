
var x = document.getElementsByClassName("header__burger")[0];

x.addEventListener("click", myFunction);

function myFunction() {
	var element = document.getElementsByClassName("header__menu")[0];
	x.classList.toggle("active");
	element.classList.toggle("active");
}