   window.onload = function() {
    let button = document.getElementById('button-random-color');
    button.addEventListener('click', function(){

       let bloco2 = document.querySelector('#color2');
       let bloco3 = document.querySelector('#color3');
       let bloco4 = document.querySelector('#color4');
       
        let corBloco2 = bloco2.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        let corBloco3 = bloco3.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        let corBloco4 = bloco4.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
       

        
    })
   }


   