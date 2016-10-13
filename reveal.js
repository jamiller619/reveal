(function() {
  var els = document.getElementsByTagName('input');
  
  for(var i=0; i<els.length; i++) {
    var el = els[i];
    if(el.getAttribute('type') == 'password') {
      el.setAttribute('type','text');
    }
  }
  
})();