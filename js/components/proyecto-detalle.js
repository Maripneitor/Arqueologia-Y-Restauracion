// js/components/proyecto-detalle.js

// =====================================================================
// IMPORTACIÓN DE DATOS (CORRECCIÓN CLAVE)
// =====================================================================
// Se importa la base de datos central de proyectos.
// Esto permite que la página sea dinámica y se actualice fácilmente.
import { projectsData } from '../data/proyectosData.js';


// =====================================================================
// FUNCIÓN PRINCIPAL DE CARGA DE DATOS
// =====================================================================
// Carga la información del proyecto específico basándose en el ID de la URL.
function loadProjectData() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    // Busca el proyecto en nuestra base de datos importada.
    const project = projectsData.find(p => p.id === projectId);

    // Si el proyecto no existe, muestra un mensaje de error.
    if (!project) {
        const mainContent = document.querySelector('.project-detail-page');
        if (mainContent) {
            mainContent.innerHTML = `<div class="container section-padding" style="text-align: center;"><h1>Proyecto no encontrado</h1><p>El proyecto con ID "${projectId}" no existe. <a href="proyectos.html">Volver a proyectos</a>.</p></div>`;
        }
        console.error(`No se encontró el proyecto con ID: ${projectId}`);
        return;
    }

    // Si encuentra el proyecto, rellena dinámicamente el HTML.
    document.title = `${project.title} - ArqueoRestaura`; // Actualiza el título de la pestaña
    
    // Función auxiliar para no repetir document.getElementById
    const getEl = (id) => document.getElementById(id);
    
    getEl('current-project-title').textContent = project.title;
    getEl('project-title').textContent = project.title;
    getEl('project-category').textContent = project.category;
    getEl('project-description').textContent = project.description;
    getEl('project-year').textContent = project.details.year;
    getEl('project-location').textContent = project.details.location;
    getEl('project-client').textContent = project.details.client;
    
    // Rellena las imágenes del slider de comparación
    const beforeImg = document.getElementById('comparison-before-img');
    const afterImg = document.getElementById('comparison-after-img');
    
    if (beforeImg) beforeImg.src = project.details.beforeImage;
    if (afterImg) afterImg.src = project.details.afterImage;
}


// =====================================================================
// FUNCIONES DE INTERACTIVIDAD (CÓDIGO ORIGINAL MEJORADO)
// =====================================================================

// Inicializa el slider de comparación Antes/Después.
function initializeComparisonSlider() {
    const slider = document.querySelector('.comparison-slider__slider');
    const beforeImgWrapper = document.querySelector('.comparison-slider__img-wrapper--before');
    const divider = document.querySelector('.comparison-slider__divider');

    if (!slider || !beforeImgWrapper || !divider) return;

    const moveSlider = (value) => {
        const percent = value + '%';
        beforeImgWrapper.style.width = percent;
        divider.style.left = percent;
    };

    slider.addEventListener('input', (e) => moveSlider(e.target.value));
}

// Inicializa el visor 3D (simulado).
function initializeModelViewer() {
    const rotateBtn = document.getElementById('rotate-model');
    const resetBtn = document.getElementById('reset-model');
    
    if (!rotateBtn || !resetBtn) return;
    
    rotateBtn.addEventListener('click', () => alert('Rotando modelo 3D...'));
    resetBtn.addEventListener('click', () => alert('Reiniciando vista del modelo 3D...'));
}


// =====================================================================
// NUEVAS FUNCIONES AÑADIDAS (INTEGRACIÓN)
// =====================================================================

// Función para aplicar los efectos visuales de estilo "papiro".
function applyPapiroEffects() {
    // Aplicar clase para estilo de texto. Es mejor manejar esto con CSS.
    document.body.classList.add('papiro-theme');
    
    // Efecto de "desenrollado" al cargar (manejado con CSS en la clase 'papiro-loaded').
    setTimeout(() => {
        document.body.classList.add('papiro-loaded');
    }, 100);
}

// Función para inicializar el scroll suave para anclas.
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


// =====================================================================
// EJECUCIÓN PRINCIPAL
// =====================================================================
// Este evento se asegura de que todo el HTML esté listo antes de ejecutar el JS.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carga la información del proyecto.
    loadProjectData();
    
    // 2. Inicializa los componentes interactivos.
    initializeComparisonSlider();
    initializeModelViewer();
    initSmoothScroll(); // Se llama tu función de scroll suave.
    
    // 3. Aplica los efectos visuales.
    applyPapiroEffects(); // Se llama tu función de efectos papiro.

    // 4. Efecto de aparición suave de la página.
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in-out';
        document.body.style.opacity = '1';
    }, 50); // Un pequeño retraso para asegurar que todo esté cargado.
});