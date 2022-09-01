   window.onload = function() {
    let button = document.getElementById('button-random-color');
    button.addEventListener('click', function(){

       let bloco2 = document.querySelector('#color2');
       let bloco3 = document.querySelector('#color3');
       let bloco4 = document.querySelector('#color4');
       
       let randomRgb1 = Math.floor(Math.random() * 255);
       let randomRgb2 = Math.floor(Math.random() * 255);
       let randomRgb3 = Math.floor(Math.random() * 255);
       let randomRgb4 = Math.floor(Math.random() * 255);
       let randomRgb5 = Math.floor(Math.random() * 255);
       let randomRgb6 = Math.floor(Math.random() * 255);
       let randomRgb7 = Math.floor(Math.random() * 255);
       let randomRgb8 = Math.floor(Math.random() * 255);
       let randomRgb9 = Math.floor(Math.random() * 255);
       bloco2.style.backgroundColor = 'rgb(' + randomRgb1 + ', ' + randomRgb2 + ', ' + randomRgb3 + ')';
       bloco3.style.backgroundColor = 'rgb(' + randomRgb4 + ', ' + randomRgb5 + ', ' + randomRgb6 + ')';
       bloco4.style.backgroundColor = 'rgb(' + randomRgb7 + ', ' + randomRgb8 + ', ' + randomRgb9 + ')';
    })
   }
