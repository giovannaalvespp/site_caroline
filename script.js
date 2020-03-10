const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "right"
});
var image = document.getElementsByClassName('img1');
new simpleParallax(image, {
	orientation: 'right'
});
var image = document.getElementsByClassName('img3');
new simpleParallax(image);
