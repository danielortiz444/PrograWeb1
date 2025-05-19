
document.addEventListener("DOMContentLoaded", function () {
    const agregarBtn = document.getElementById("agregarBtn");
    const entrada = document.getElementById("entrada");
    const listaTareas = document.getElementById("listaTareas");

    agregarBtn.addEventListener("click", function () {
        const textoTarea = entrada.value.trim();

        if (textoTarea === "") {
            alert("Por favor escribe una tarea.");
            return;
        }
        
        const li = document.createElement("li");
        li.textContent = textoTarea;

        const botonOk = document.createElement("button");
        botonOk.textContent = "Ok";
        botonOk.addEventListener("click", function () {
            listaTareas.removeChild(li);
        });

        li.appendChild(botonOk);
        listaTareas.appendChild(li);

        entrada.value = "";
        entrada.focus();
    });
});
