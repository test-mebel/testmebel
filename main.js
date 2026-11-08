(function(){
  var nav=document.getElementById('nav'), burger=document.getElementById('burger');
  function closeAll(except){document.querySelectorAll('nav.main li.open').forEach(function(li){if(li!==except){li.classList.remove('open');li.querySelector('button').setAttribute('aria-expanded','false')}})}
  nav.querySelectorAll(':scope>ul>li>button').forEach(function(b){
    b.addEventListener('click',function(){var li=b.parentElement,o=!li.classList.contains('open');closeAll(li);li.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
  });
  document.addEventListener('click',function(e){if(!e.target.closest('nav.main')) closeAll()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape') closeAll()});
  burger.addEventListener('click',function(){var o=nav.classList.toggle('show');burger.setAttribute('aria-expanded',o)});
})();
