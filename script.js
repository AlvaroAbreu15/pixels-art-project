 window.onload = function() {
    let button = document.getElementById('button-random-color');
    
  
    button.addEventListener('click', function(){

       const bloco2 = document.querySelector('#color2');
       const bloco3 = document.querySelector('#color3');
       const bloco4 = document.querySelector('#color4');
       
        let corBloco2 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        bloco2.style.backgroundColor = corBloco2;

        let corBloco3 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

        bloco3.style.backgroundColor = corBloco3;

        let corBloco4 = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        bloco4.style.backgroundColor = corBloco4;

       
      const palette = [corBloco2, corBloco3, corBloco4];
      const storage = localStorage;
      storage.setItem('colorPalette', JSON.stringify(palette));
      
      
 })
 function recovered () {
   let recoveredArray = JSON.parse(localStorage.getItem('colorPalette'));
   cor1 = recoveredArray[0];
   cor2 = recoveredArray[1];
   cor3 = recoveredArray[2];
   document.querySelector('#color2').style.backgroundColor = cor1;
   document.querySelector('#color3').style.backgroundColor = cor2;
   document.querySelector('#color4').style.backgroundColor = cor3;
 }
   recovered();

}


 let listaDeElementos = document.querySelectorAll('.color');

for (let i = 0; i <= listaDeElementos.length ; i += 1){

  listaDeElementos[i].addEventListener('click', function(){
   if  ( (i === 0) && (listaDeElementos[0].className = 'color') ){
      listaDeElementos[0].classList.add('selected');
      listaDeElementos[3].classList.remove('selected');
      listaDeElementos[1].classList.remove('selected');
      elementoFilho[2].classList.remove('selected'); 
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
  })
}
   
    
     
    
 


 



