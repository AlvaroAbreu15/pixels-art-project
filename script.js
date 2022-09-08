function initial () {
   const initial = 5;
   const initialSize = (initial * initial);
   for (let index = 0; index < initialSize ; index += 1) {
   
   let divInitial = document.createElement('div');
   divInitial.className = 'pixel';
   document.getElementById('pixel-board').appendChild(divInitial);
   
   
   }
   }

initial();


let black = document.getElementById('black');

black.style.backgroundColor = 'black';

let color2 = document.getElementById('color2');

color2.style.backgroundColor = 'green';


let color3 = document.getElementById('color3');

color3.style.backgroundColor = 'yellow';

let color4 = document.getElementById('color4');

color4.style.backgroundColor = 'red';

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

      
         if (botoes[0].className === 'color selected') {
         botoes[0].classList.add('selected');
        pixels[index].addEventListener('click', function(){
        pixels[index].style.backgroundColor = 'rgb(0, 0, 0)';
        
        });
      }
         else if (botoes[1].className === 'color selected' ) {
   
         pixels[index].addEventListener('click', function(){
            if (localStorage.colorPalette !== undefined) {

             let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
             pixels[index].style.backgroundColor = recoveredColor1[0];
            } else {
               pixels[index].style.backgroundColor = 'green';
                
            }
        });
       }  
        else if (botoes[2].className === 'color selected' ) {
         
            pixels[index].addEventListener('click', function(){
             if (localStorage.colorPalette !== undefined) {
              let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
              pixels[index].style.backgroundColor = recoveredColor1[1];
             } else {

               pixels[index].style.backgroundColor = 'yellow';
             }
            });
         
      } else if (botoes[3].className === 'color selected' ) {
         
            pixels[index].addEventListener('click', function(){
            if (localStorage.colorPalette !== undefined)   {
              let recoveredColor1 = JSON.parse(localStorage.getItem('colorPalette'));
              pixels[index].style.backgroundColor = recoveredColor1[2];
            } else {
               pixels[index].style.backgroundColor = 'red';
            }
            });
         
      } 
   }
   });
   
 }




let buttonClear = document.createElement('button');
let section = document.getElementById('section');

buttonClear.innerHTML = 'Limpar';
buttonClear.id = 'clear-board';
section.appendChild(buttonClear);


buttonClear.addEventListener('click', function() {
   let quadro = document.querySelectorAll('.pixel');
for(let i = 0; i < quadro.length ; i += 1){

quadro[i].style.backgroundColor = 'white';

}


});
function saveDraw () {
let pix = document.querySelectorAll('.pixel');
let color = [];
for (let i =0 ; i < pix.length ; i += 1){

let save = pix[i].style.backgroundColor;
color.push(save);

localStorage.setItem('pixelBoard', JSON.stringify(color));
}

}

function getDraw () {


let draw = JSON.parse(localStorage.getItem('pixelBoard'))

if (localStorage.pixelBoard !== null) {
   
for (let index = 0 ; index < draw.length ; index += 1){
   let pixel = document.querySelectorAll('.pixel');
   pixel[index].style.backgroundColor = draw[index];
}


}

}

let boarded = document.querySelector('#pixel-board');
boarded.addEventListener('click', saveDraw);

getDraw();




let buttonGenerate = document.getElementById('generate-board');

function size () {
 let sizeBoard = document.getElementById('board-size').value;
 
 
 
 const sizeSquare = (sizeBoard * sizeBoard) - 25;
for (let i = 0; i < sizeSquare ; i += 1) {

let div = document.createElement('div');
 div.className = 'pixel';

document.getElementById('pixel-board').appendChild(div);
 }
}


buttonGenerate.addEventListener('click', size);