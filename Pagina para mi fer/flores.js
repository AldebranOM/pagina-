// Seleccionamos el contenedor de las flores
const flowersContainer = document.createElement('div');
flowersContainer.classList.add('flowers');
document.body.appendChild(flowersContainer);

// Generar varias flores
for (let i = 0; i < 15; i++) {
    const flower = document.createElement('div');
    flowersContainer.appendChild(flower);
}


