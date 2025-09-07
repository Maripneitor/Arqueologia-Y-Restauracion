// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar header y footer
    loadComponent('header-container', '../partials/header.html');
    loadComponent('footer-container', '../partials/footer.html');
    
    // Inicializar funcionalidades específicas de la página
    initializeComparisonSlider();
    initializeModelViewer();
    loadProjectData();
});

// Función para cargar componentes
async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
        
        // Ejecutar scripts dentro del componente
        const scripts = document.getElementById(componentId).querySelectorAll('script');
        for (let script of scripts) {
            if (script.src) {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                document.head.appendChild(newScript);
            } else {
                try {
                    new Function(script.textContent)();
                } catch (e) {
                    console.error('Error executing script:', e);
                }
            }
        }
    } catch (error) {
        console.error('Error loading component:', error);
        // Fallback básico si el componente no carga
        if (componentId === 'header-container') {
            document.getElementById(componentId).innerHTML = `
                <header class="header">
                    <div class="container">
                        <a href="index.html" class="logo">Arquitectura y Restauración</a>
                        <nav class="nav">
                            <a href="proyectos.html">Proyectos</a>
                            <a href="servicios.html">Servicios</a>
                            <a href="nosotros.html">Nosotros</a>
                            <a href="contacto.html">Contacto</a>
                        </nav>
                    </div>
                </header>
            `;
        }
    }
}

// Cargar datos del proyecto basado en el ID de la URL
function loadProjectData() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || '1';
    
    // Datos de proyectos (en un caso real vendrían de una API)
    const projects = {
        '1': {
            title: 'Restauración de Templo Maya',
            category: 'Arqueología',
            description: 'Restauración integral del Templo de las Inscripciones en Palenque, México.',
            year: '2018-2020',
            location: 'Palenque, México',
            client: 'Museo Nacional de Antropología',
            beforeImage: 'https://via.placeholder.com/800x450?text=Antes+de+Restauración',
            afterImage: 'https://via.placeholder.com/800x450?text=Después+de+Restauración'
        },
        '2': {
            title: 'Conservación de Frescos Romanos',
            category: 'Pintura Mural',
            description: 'Proyecto de conservación preventiva y restauración de frescos romanos del siglo I d.C. en Pompeya.',
            year: '2019',
            location: 'Pompeya, Italia',
            client: 'Parque Arqueológico de Pompeya',
            beforeImage: 'https://via.placeholder.com/800x450?text=Antes+de+Restauración',
            afterImage: 'https://via.placeholder.com/800x450?text=Después+de+Restauración'
        }
    };

    const project = projects[projectId] || projects['1'];
    
    // Actualizar el contenido de la página
    document.getElementById('current-project-title').textContent = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-location').textContent = project.location;
    document.getElementById('project-client').textContent = project.client;
    
    // Actualizar imágenes del slider de comparación si existen
    const beforeImg = document.querySelector('.comparison-slider__img--before');
    const afterImg = document.querySelector('.comparison-slider__img--after');
    
    if (beforeImg && project.beforeImage) {
        beforeImg.src = project.beforeImage;
    }
    
    if (afterImg && project.afterImage) {
        afterImg.src = project.afterImage;
    }
}

// Inicializar el slider de comparación
function initializeComparisonSlider() {
    const slider = document.querySelector('.comparison-slider__slider');
    const divider = document.querySelector('.comparison-slider__divider');
    const beforeImg = document.querySelector('.comparison-slider__img--before');
    
    if (!slider || !divider || !beforeImg) return;
    
    slider.addEventListener('input', function(e) {
        const value = e.target.value + '%';
        divider.style.left = value;
        beforeImg.style.width = value;
    });
    
    // Soporte para dispositivos táctiles
    slider.addEventListener('touchstart', function() {
        slider.focus();
    });
}

// Inicializar el visor 3D (simulado)
function initializeModelViewer() {
    const rotateBtn = document.getElementById('rotate-model');
    const resetBtn = document.getElementById('reset-model');
    
    if (!rotateBtn || !resetBtn) return;
    
    rotateBtn.addEventListener('click', function() {
        alert('Función de rotar activada. En una implementación real, esto rotaría el modelo 3D.');
    });
    
    resetBtn.addEventListener('click', function() {
        alert('Función de reinicio activada. En una implementación real, esto reiniciaría la vista del modelo 3D.');
    });
}