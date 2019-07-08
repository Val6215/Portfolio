//---------------------------- Fonction qui permet de revenir au scroll de l'id ------------------------//
function myLastScrollTo(id) {
  var e = document.getElementById(id);
  var box = e.getBoundingClientRect();
  window.scrollBy(0, box.top);
}

//---------------------------------- Fonction qui permet d'aller au scroll de l'id --------------------------------//
function myScrollTo(id) {
  var e = document.getElementById(id);
  var box = e.getBoundingClientRect();
  var k, inc;
  inc = (box.top >= 0) ? 1 : -1;
  for (k = 0; k < 49; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 50) + ")", 10 * k);
  setTimeout("myLastScrollTo('" + id + "')", 500);
}


document.getElementById('btn-menu').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('show');
});
