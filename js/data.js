document.addEventListener("DOMContentLoaded", function(){
    const spanData = document.getElementById('data'); // obtener el elemento span donde mostraremos el dato 
    spanData.innerText = localStorage.getItem('dato'); //mostrar el dato
});