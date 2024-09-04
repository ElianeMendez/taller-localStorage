document.addEventListener('DOMContentLoaded', function() {
    //obtengo las referencias a los elementos
    const inputDato = document.getElementById('inputText');
    const botonGuardar = document.getElementById('buttonText');
    //agregar el click
    botonGuardar.addEventListener('click', function() {
        const dato = inputDato.value;  // obtener el valor 
        localStorage.setItem('dato', dato); //guardar el valor en localStorage
    });
});