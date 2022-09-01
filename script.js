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
 /*function recovered () {
   let recoveredArray = JSON.parse(localStorage.getItem('colorPalette'));
   cor1 = recoveredArray[0];
   cor2 = recoveredArray[1];
   cor3 = recoveredArray[2];
   document.querySelector('#color2').style.backgroundColor = cor1;
   document.querySelector('#color3').style.backgroundColor = cor2;
   document.querySelector('#color4').style.backgroundColor = cor3;
 }
   recovered();
   */
}


 let elementoFilho = document.querySelector('#color-palette').children;
 console.log(elementoFilho);
 let elemento = document.getElementById('color2');
  elemento.addEventListener('click', function() {  
   

   
    
      if (elementoFilho[1].classList = 'color') {
         elementoFilho[1].classList.add('selected')
      } 
        
   

    });
    
 


 



