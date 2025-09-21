// js/components/proyectos.js

// Importamos la base de datos central de proyectos
import { projectsData } from '../data/proyectosData.js';

function initProjectGalleries() {
    const bookContainer = document.getElementById('project-book');
    const gridContainer = document.getElementById('projects-grid-container');

    // Si no estamos en la página de proyectos, no hacemos nada.
    if (!bookContainer && !gridContainer) {
        return;
    }

    // Limpiamos contenedores para evitar duplicados al redimensionar la ventana.
    if (bookContainer) bookContainer.innerHTML = '';
    if (gridContainer) gridContainer.innerHTML = '';

    // Llenamos ambos contenedores (libro y grid) con los datos.
    projectsData.forEach(project => {
        // --- Creamos la tarjeta para el Grid (móviles) ---
        const gridCard = createGridCard(project);
        if (gridContainer) gridContainer.appendChild(gridCard);

        // --- Creamos la página para el Libro (escritorio) ---
        // (La lógica del libro la podemos refinar después, por ahora nos enfocamos en que funcione)
        const bookPage = createBookPage(project);
        if (bookContainer) bookContainer.appendChild(bookPage);
    });
}

// Función que crea una tarjeta para la vista de grid
function createGridCard(project) {
    const gridItem = document.createElement('div');
    gridItem.className = 'project-card';
    
    // CORRECCIÓN CLAVE: El enlace ahora incluye '?id=${project.id}'
    gridItem.innerHTML = `
        <a href="proyecto-detalle.html?id=${project.id}" class="project-card__link_wrapper">
            <img src="${project.image}" alt="Imagen de ${project.title}" class="project-card__image">
            <div class="project-card__content">
                <span class="project-card__category">${project.category}</span>
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description.substring(0, 100)}...</p>
                <span class="project-card__link">Ver proyecto →</span>
            </div>
        </a>
    `;
    return gridItem;
}

// Función que crea una página para la vista de libro
function createBookPage(project) {
    const page = document.createElement('div');
    page.className = 'book-gallery__page';
    // CORRECCIÓN CLAVE: El enlace ahora incluye '?id=${project.id}'
    page.innerHTML = `
        <div class="book-gallery__page-front">
            <img src="${project.image}" alt="${project.title}" class="book-gallery__image">
            <div class="book-gallery__content">
                <h3 class="book-gallery__project-title">${project.title}</h3>
                <span class="book-gallery__project-category">${project.category}</span>
                <p class="book-gallery__project-description">${project.description}</p>
                <a href="proyecto-detalle.html?id=${project.id}" class="book-gallery__project-link">
                    Ver detalles <span>→</span>
                </a>
            </div>
        </div>
        <div class="book-gallery__page-back">
            </div>
    `;
    return page;
}

// Ejecutamos la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initProjectGalleries);