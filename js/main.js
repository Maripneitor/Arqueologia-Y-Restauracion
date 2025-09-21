// js/main.js

// Función para cargar un componente HTML en un contenedor
async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Error al cargar ${filePath}`);
        }
        const html = await response.text();
        const container = document.getElementById(componentId);
        if (container) {
            container.innerHTML = html;
        }
    } catch (error) {
        console.error(`No se pudo cargar el componente: ${error}`);
    }
}

// Carga los componentes comunes (header y footer) en la página.
// Los scripts de cada componente (como el del header) están DENTRO de su propio archivo HTML.
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-container', './partials/header.html');
    loadComponent('footer-container', './partials/footer.html');
    console.log('Sitio cargado - ArqueoRestaura');
});