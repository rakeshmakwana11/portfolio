
  

document.addEventListener("DOMContentLoaded",function(){
  document.querySelector(".menu-open").addEventListener("click",function(){

      document.querySelector(".mobile-menu").style.width="100%";
  });

  document.querySelector(".menu-close-btn").addEventListener("click",function(){

      document.querySelector(".mobile-menu").style.width="0";
  });

  // -------------------------------------------------------

});