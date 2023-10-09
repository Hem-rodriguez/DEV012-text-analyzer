import analyzer from './analyzer.js';


const boton = document.getElementById("borrar");
const textarea = document.querySelector('textarea[name="user-input"]');
boton.addEventListener('click',  () => {
boton.addEventListener('input',  () => {

 

    textarea.value = '';  
    document.querySelector('[data-testid="word-count"]').innerHTML='palabras: 0'
    document.querySelector('[data-testid="character-count"]').innerHTML= 'catacteres: 0'
    document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML= 'caracteres sin espacio:0 ' 
    document.querySelector('[data-testid="number-count"]').innerHTML= 'conteo de numeros:0 '
    document.querySelector('[data-testid="number-sum"]').innerHTML= 'suma de numeros: 0' 
    document.querySelector('[data-testid="word-length-average"]').innerHTML= 'logitud:0 ' 
});
});

textarea.addEventListener ('keyup', function(){
 const text=document.querySelector('textarea[name="user-input"]');
 
document.querySelector('[data-testid="word-count"]').innerHTML='palabras: ' + analyzer.getWordCount(text.value);
document.querySelector('[data-testid="character-count"]').innerHTML= 'catacteres: ' + analyzer.getCharacterCount(textarea.value); 
document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML= 'caracteres sin espacio: ' + analyzer.getCharacterCountExcludingSpaces(text.value);
document.querySelector('[data-testid="number-count"]').innerHTML= 'conteo de numeros: ' + analyzer.getNumberCount(text.value);
document.querySelector('[data-testid="number-sum"]').innerHTML= 'suma de numeros: ' + analyzer.getNumberSum(text.value); 
document.querySelector('[data-testid="word-length-average"]').innerHTML= 'logitud: ' + analyzer.getAverageWordLength(text.value);
   
});








        



 
 

 