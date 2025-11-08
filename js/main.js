
document.getElementById('burger').onclick = function(){
  var nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
