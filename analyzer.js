const analyzer = {  
  getWordCount: (text) => {if (text===''|| text===' '){return 0;
  }
  const words=text.split(' ');
  return words.length;
  },
      
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text===" "){return 0;
    }
    const words=text;
    return words.length;},
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    if (text==="" || text===" "){
      return 0;
    }
    else {
      const characterlist=['!'," ",'|','¬','"','#','$','%','&','/','(',')','=','?','¡','¿','*','-','~','>','<',':',]
      const onlyLetters=[];
      const letters=text.split('');
     for(const letter of letters){
      if (!characterlist.includes(letter) && letter !==' '){
        onlyLetters.push(letter);
      }
     } 
     return onlyLetters.length;
    }
    
  },
  
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
     const words = text.split (" ");
     console.log(text)
      let totalLength = 0;
      if(text===" " || text===null){
        console.log ("ok")
        return 0;
      }

     for(let i = 0; i < words.length; i++)
  {
         totalLength += words[i].length;
     }

     if (words.length > 0) {
         const longitudPalabras = totalLength / words.length;
         return longitudPalabras;
     } else {
         return 0; //para evitar la divicion si no pongo palabras.
     }
 
},

  
  getNumberCount: (text) =>{
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if(text===" "){
      return 0;
    }
    const Texto=text.match(/\b\d+(\.\d+)?\b/g);
    const numsList=[];
    if(Texto){
      numsList.push(...Texto.map(Number));
    }
    let counter=0;
    for (const dato of numsList){
      if(numsList.includes(dato)){
        counter=counter+1;
      }

    }
    return(counter);
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    console.log(text) 
     let decimals = 0;
    if(text===" " || text===null){ 
      console.log ("ok")
      return 0;
    } else { 
      //const texto = text.match(/\b\d+(\.\d+)?\b/g);
      console.log (text)
      for(let i = 0; i < text.length; i++){
       const suma = text[i];
        if (!isNaN(Number(suma))){
          decimals += Number(suma);

        }
      }
     }
      
    
   return decimals;

},

};
export default analyzer;
