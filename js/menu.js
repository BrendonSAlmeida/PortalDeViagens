const hamburguer = document.querySelector('.hamburguer');
   const navLinks = document.querySelector('.menu');  
   hamburguer.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
   });