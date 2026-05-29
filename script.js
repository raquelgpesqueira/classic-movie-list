
// Código para el script en JavaScript
function buscar(){

    //leemos el texto del input incluido e identificado a través del id
    const input = document.getElementById("agregar"); //lee el texto que se incluye en el elemento con id "agregar"
    const lista =document.getElementById("listaPeliculas"); //
    const texto =input.value.trim();

    if (texto !== "") { //siempre y cuando el texto no esté vacío
        const li=document.createElement("li"); //se crea el elemento "li" 
        li.textContent=texto; // "li" que se sustituye por el texto introducido
        lista.appendChild(li); //agrega el nuevo elemento a la lista
        input.value=""; // Limpia el búffer; vuelve a dejar la barra en blanco apra que no se sobreescriba el siguiente elemento
    }
}
