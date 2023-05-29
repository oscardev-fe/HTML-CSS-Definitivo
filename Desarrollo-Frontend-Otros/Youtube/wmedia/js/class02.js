// Seleccionar elementos html que necesitamos
let input = document.getElementById("tarea");
let boton = document.getElementById("boton")
let tareas = document.querySelector("ul")


// Cuando se haga click en el botón
boton.addEventListener("click", function () {
    // Obtener lo que hay en el input
    let tarea = input.value
    console.log(tarea)

    // Añadirlo como elemento li
    let li = document.createElement("li")
    li.textContent = tarea
    tareas.appendChild(li)
})
