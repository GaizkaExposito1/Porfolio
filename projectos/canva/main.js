
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    //Contorno del emogy
    ctx.arc(75,75,50,0,Math.PI*2,true); 
    //levanto el "Lapiz" y me muevo hacia la boca
    ctx.moveTo(100,75);
    //hago la boca
    ctx.arc(75,75,25,0,Math.PI,false); 
    //Levanto el "Lapiz", para hacer el ojo de la izquierda  
    ctx.moveTo(55,55);
    //hago el circulo del ojo de la izquierda
    ctx.arc(50,55,5,0,Math.PI*2,true);
    //Levanto el "Lapiz", para hacer el ojo de la derecha  
    ctx.moveTo(100,60);
        //hago el circulo del ojo de la derecha
    ctx.arc(96,57,5,0,Math.PI*2,true);  
    ctx.stroke();
  }
}
