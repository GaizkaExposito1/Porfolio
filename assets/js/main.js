//===================================//
//===================================//
//====== Enable hidden nav bar ======//
//===================================//
//===================================//
{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}
"use strict";




//===================================//
//===================================//
//======== Header animation ======== //
//===================================//
//===================================//  
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    const scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};

//===================================//
//===================================//
//===== SCROLL REVEAL ANIMATION =====//
//===================================//
//===================================//
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//SCROLL HOME//
sr.reveal('.home__title', {})
sr.reveal('.home__text', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})
sr.reveal('.Titulo_seccion', {origin:'left', delay:250})
sr.reveal('.skills__data',{interval: 200}); 

//===================================//
//===================================//
//========= Color scroll  =========//
//===================================//
//===================================//

  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

//===================================//
//===================================//
//======== Mostrar Proyectos ========//
//===================================//
//===================================//
function mostrarFront() {
  /*const abajo= document.getElementById('mostrar');
  const arriba = document.getElementById('ocultar');
  const divoculto = document.getElementById('oculto');
if (abajo.style.display=='none') {
  abajo.style.display='none';
  arriba.style.display='inline';
  divoculto.style.display='block';
}else{
  abajo.style.display='block';
  arriba.style.display='none';
  divoculto.style.display='none';
}
*/
const front= document.getElementById('frontend');


}
function mostrarBack() {
  const abajo= document.getElementById('mostrar1');
  const arriba = document.getElementById('ocultar1');
  const divoculto = document.getElementById('oculto1');
}
function mostrarOtros() {
  const abajo= document.getElementById('mostrar2');
  const arriba = document.getElementById('ocultar2');
  const divoculto = document.getElementById('oculto2');
}


//===================================//
//===================================//
//========= Projects hover  =========//
//===================================//
//===================================//
function Info() {
  console.log("hola")
}
//===================================//
//===================================//
//======== Control pantalla  ========//
//===================================//
//===================================//
function resolucion() {
  alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)  
}


//===================================//
//===================================//
//========= Projects click  =========//
//===================================//
//===================================//
function redireccion(valor) {
  const proyecto = document.getElementById
  switch (valor) {
    case 1:
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 2:
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 3:
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 4:
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 5:
      console.log('El kilogramo de cerezas cuesta $45.00.');
      break;
    case 6:
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  // window.open('http://google.com', '_blank');
}


/*
<!DOCTYPE html>
<html>
<style>
#myProgress {
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 10%;
  height: 30px;
  background-color: #04AA6D;
  text-align: center;
  line-height: 30px;
  color: white;
}
</style>
<body onload="move()">

<h1>JavaScript Progress Bar</h1>


<div id="myProgress" >
  <div id="myBar">10%</div>
</div>

<br>


<script>
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
</script>

</body>
</html>

*/