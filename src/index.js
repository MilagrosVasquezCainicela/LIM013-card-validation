
import validator from './validator.js';
//console.log(validator.isValid("4083952015263"));

// llamando al elemento con ese id
let send = document.getElementById('send')
let card = document.getElementById('inputNumero');
// asigno un observador
send.addEventListener('click', function(){
    event.preventDefault();
    let numero=card.value;
   let resultado=validator.isValid(numero); 
   let mascara=validator.maskify(numero); 
   if(resultado==true){
    numero= mascara;
   document.getElementById("resultado").textContent= mascara + " Tarjeta Válida";
  
} else{ 
       document.getElementById("resultado").textContent="Tarjeta Inválida"; 

   }
    

})

// }) ;
//* Seleccionar el año generado dinamicamente. 
const yearActual =(new Date()).getFullYear();
console.log(yearActual)
let select = document.getElementById("selectYear")
for(let i = yearActual; i <= 2030; i++){
    let opcion = document.createElement("option")
    opcion.text= i;
    opcion.value = i;
    select.add(opcion);
}
//* Input número de tarjeta
formulario-tarjeta.inputNumero.addEventListener('keyup',(e) => { 
    let valorInput = e.target.value;

    // eslint-disable-next-line no-undef
    formulario.inputNumero.value = valorInput 
    //*Eliminamos aspectos en blanco
    .replace(/\s/g,'')
    //*Eliminar las letras
    .replace(/\D/g,'')
    //*Ponemos espacio cada cuatro números
    .replace(/([0-9]{4})/g, '$1 ');
});