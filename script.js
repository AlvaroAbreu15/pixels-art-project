
const button = document.getElementById('button-random-color');

button.addEventListener('click', randomColor);
function randomColor(){

   const bloco2 = document.querySelector('#color2');
   const bloco3 = document.querySelector('#color3');
   const bloco4 = document.querySelector('#color4');
   
   let corBloco2 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
   bloco2.style.backgroundColor = corBloco2;

   let corBloco3 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

   bloco3.style.backgroundColor = corBloco3;

   let corBloco4 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
   bloco4.style.backgroundColor = corBloco4;

   
   const colorPalette = [corBloco2, corBloco3, corBloco4];
  
   localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
   
}

function recoveredColor() {
   if (localStorage.colorPalette !== undefined){
   let recoveredArray = localStorage.getItem('colorPalette');
   JSON.parse(recoveredArray);
  
   document.querySelector('#color2').style.backgroundColor = JSON.parse(recoveredArray)[0];
   document.querySelector('#color3').style.backgroundColor = JSON.parse(recoveredArray)[1];
   document.querySelector('#color4').style.backgroundColor = JSON.parse(recoveredArray)[2];
   }
}
recoveredColor();


let listaDeElementos = document.querySelectorAll('.color');

for (let i = 0; i < listaDeElementos.length ; i += 1){

  listaDeElementos[i].addEventListener('click', function(){
   if  ( (i === 0) && (listaDeElementos[0].className = 'color') ){
      listaDeElementos[0].classList.add('selected');
      listaDeElementos[3].classList.remove('selected');
      listaDeElementos[1].classList.remove('selected');
      listaDeElementos[2].classList.remove('selected'); 
   } 
   else if ( (i === 1) && (listaDeElementos[1].className = 'color') ){
      listaDeElementos[1].classList.add('selected');
      listaDeElementos[0].classList.remove('selected');
      listaDeElementos[2].classList.remove('selected');
      listaDeElementos[3].classList.remove('selected');  
   } 
   else if ( (i === 2) && (listaDeElementos[2].className = 'color')){
      listaDeElementos[2].classList.add('selected');
      listaDeElementos[0].classList.remove('selected');
      listaDeElementos[1].classList.remove('selected');
      listaDeElementos[3].classList.remove('selected');
   } else if ( (i === 3) && (listaDeElementos[3].className = 'color')){
      listaDeElementos[3].classList.add('selected');
      listaDeElementos[0].classList.remove('selected');
      listaDeElementos[1].classList.remove('selected');
      listaDeElementos[2].classList.remove('selected');
   }
  });
} 


let botoes = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');

for (let indice = 0; indice < pixels.length; indice += 1){
 botoes[0].classList.add('selected');
   pixels[indice].addEventListener('click', function(){
   pixels[indice].style.backgroundColor = 'rgb(0, 0, 0)';
   
   });

}



for (let i = 0 ; i < botoes.length ; i += 1) {
     
    botoes[i].addEventListener('click', function() {
    
    for (let index = 0 ; index < pixels.length ; index += 1) {

      if (botoes[1].className === 'color selected' ) {
   
         pixels[index].addEventListener('click', function(){
            if (localStorage.colorPalette !== undefined) {

             let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
             pixels[index].style.backgroundColor = recoveredColor1[0];
            }
        });
       }
        else if (botoes[0].className === 'color selected') {
         botoes[0].classList.add('selected');
        pixels[index].addEventListener('click', function(){
        pixels[index].style.backgroundColor = 'rgb(0, 0, 0)';
        
        });
        
       }
        else if (botoes[2].className === 'color selected' ) {
         
            pixels[index].addEventListener('click', function(){
             if (localStorage.colorPalette !== undefined) {
              let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
              pixels[index].style.backgroundColor = recoveredColor1[1];
             }
            });
         
      } else if (botoes[3].className === 'color selected' ) {
         
            pixels[index].addEventListener('click', function(){
            if (localStorage.colorPalette !== undefined)   {
              let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
              pixels[index].style.backgroundColor = recoveredColor1[2];
            }
            });
         
      } 
   }
   });
   
 }





