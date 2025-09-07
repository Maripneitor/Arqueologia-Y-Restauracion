// Datos de proyectos (simulados)
const projectsData = [
    {
        id: 1,
        title: "Restauración de Templo Maya",
        category: "Arqueología",
        image: "https://www.google.com/imgres?q=Restauraci%C3%B3n%20integral%20del%20Templo%20de%20las%20Inscripciones%20en%20Palenque&imgurl=https%3A%2F%2Fimg.lajornadamaya.mx%2F1123416842871206d12c44d-d36f-4ff7-aea6-d04ddb80f61d.jpeg&imgrefurl=https%3A%2F%2Fwww.lajornadamaya.mx%2Fnacional%2F214935%2Fconcluye-restauracion-del-templo-de-las-inscripciones-y-el-palacio-de-palenque-chiapas-fotos-inah&docid=XYS7Mf6sWN1BxM&tbnid=j8WNtAHNNmQ02M&vet=12ahUKEwiz0YX6sMePAxVWr-4BHXcBEKEQM3oECCYQAA..i&w=730&h=486&hcb=2&itg=1&ved=2ahUKEwiz0YX6sMePAxVWr-4BHXcBEKEQM3oECCYQAA",
        description: "Restauración integral del Templo de las Inscripciones en Palenque, México. Trabajo de conservación que incluyó limpieza laser y consolidación estructural.",
        details: {
            year: "2018-2020",
            location: "Palenque, México",
            techniques: ["Limpieza láser", "Consolidación estructural", "Documentación 3D"],
            results: "Estabilización completa de la estructura y recuperación de inscripciones jeroglíficas"
        }
    },
    {
        id: 2,
        title: "Conservación de Frescos Romanos",
        category: "Pintura Mural",
        image: "https://images.unsplash.com/photo-1591857177580-dc82d48497e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Proyecto de conservación preventiva y restauración de frescos romanos del siglo I d.C. en Pompeya.",
        details: {
            year: "2019",
            location: "Pompeya, Italia",
            techniques: ["Consolidación de soporte", "Limpieza química", "Reintegración cromática"],
            results: "Estabilización de los frescos y recuperación de colores originales"
        }
    },
    {
        id: 3,
        title: "Excavación de Necrópolis Medieval",
        category: "Arqueología",
        image: "https://images.unsplash.com/photo-1570751485905-b605b4a0b3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        description: "Excavación arqueológica y documentación de una necrópolis medieval del siglo XII en Burgos, España.",
        details: {
            year: "2021",
            location: "Burgos, España",
            techniques: ["Excavación estratigráfica", "Antropología física", "Dating por C14"],
            results: "Documentación completa de 147 enterramientos y hallazgos significativos"
        }
    },
    {
        id: 4,
        title: "Restauración de Escultura Barroca",
        category: "Escultura",
        image: "https://images.unsplash.com/photo-1589650694748-27b60a0b95ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description: "Restauración de escultura en mármol del período barroco perteneciente a la Catedral de Sevilla.",
        details: {
            year: "2022",
            location: "Sevilla, España",
            techniques: ["Limpieza mecánica", "Consolidación", "Reintegración volumétrica"],
            results: "Recuperación completa de la pieza y reinstalación en su ubicación original"
        }
    },
    {
        id: 5,
        title: "Conservación de Textiles Precolombinos",
        category: "Textiles",
        image: "https://images.unsplash.com/photo-1560408100-2c3bdfd03889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Proyecto de conservación y documentación de textiles Paracas del Museo Nacional de Arqueología de Perú.",
        details: {
            year: "2020-2021",
            location: "Lima, Perú",
            techniques: ["Limpieza en seco", "Consolidación con fibras naturales", "Documentación fotográfica"],
            results: "Estabilización de 45 piezas textiles y creación de sistema de almacenamiento especializado"
        }
    },
    {
        id: 6,
        title: "Análisis de Cerámica Griega",
        category: "Laboratorio",
        image: "https://images.unsplash.com/photo-1571805529673-18712580a7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Análisis científico y documentación de cerámica ática del período clásico mediante técnicas no invasivas.",
        details: {
            year: "2022",
            location: "Atenas, Grecia",
            techniques: ["Espectrometría RAMAN", "Microscopía digital", "Tomografía computerizada"],
            results: "Identificación de pigmentos y técnicas de manufactura originales"
        }
    }
];

// Función para inicializar la galería de proyectos
function initProjectGallery() {
    // Solo inicializar si estamos en la página de proyectos
    if (!document.querySelector('.projects-page')) return;
    
    // Inicializar libro en desktop y grid en móvil
    if (window.innerWidth >= 1024) {
        initBookGallery();
    } else {
        initProjectsGrid();
    }
    
    // Re-inicializar en redimensionamiento
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            document.querySelector('.book-gallery').style.display = 'block';
            document.querySelector('.projects-grid').style.display = 'none';
            initBookGallery();
        } else {
            document.querySelector('.book-gallery').style.display = 'none';
            document.querySelector('.projects-grid').style.display = 'block';
            initProjectsGrid();
        }
    });
}

// Inicializar galería con efecto libro
function initBookGallery() {
    const bookElement = document.getElementById('project-book');
    const currentPageElement = document.getElementById('current-page');
    const totalPagesElement = document.getElementById('total-pages');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    
    let currentPage = 0;
    const totalPages = projectsData.length;
    
    // Actualizar contador
    totalPagesElement.textContent = totalPages;
    updateCounter();
    
    // Crear páginas del libro
    projectsData.forEach((project, index) => {
        const pageElement = createBookPage(project, index);
        bookElement.appendChild(pageElement);
        
        // Posicionar páginas
        if (index === 0) {
            pageElement.style.zIndex = totalPages - index;
            pageElement.style.transform = 'rotateY(0deg)';
        } else {
            pageElement.style.zIndex = totalPages - index;
            pageElement.style.transform = 'rotateY(180deg)';
        }
    });
    
    // Event listeners para controles
    prevButton.addEventListener('click', goToPreviousPage);
    nextButton.addEventListener('click', goToNextPage);
    
    // Soporte para gestos táctiles y deslizamiento
    let touchStartX = 0;
    let touchEndX = 0;
    
    bookElement.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    bookElement.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    // Soporte para teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPreviousPage();
        } else if (e.key === 'ArrowRight') {
            goToNextPage();
        }
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToNextPage();
            } else {
                goToPreviousPage();
            }
        }
    }
    
    function goToNextPage() {
        if (currentPage < totalPages - 1) {
            const currentPageElement = bookElement.children[currentPage];
            currentPageElement.style.transform = 'rotateY(-180deg)';
            currentPageElement.style.zIndex = totalPages - currentPage;
            
            currentPage++;
            
            const nextPageElement = bookElement.children[currentPage];
            nextPageElement.style.transform = 'rotateY(0deg)';
            nextPageElement.style.zIndex = totalPages + currentPage;
            
            updateCounter();
            updateButtonStates();
        }
    }
    
    function goToPreviousPage() {
        if (currentPage > 0) {
            const currentPageElement = bookElement.children[currentPage];
            currentPageElement.style.transform = 'rotateY(180deg)';
            currentPageElement.style.zIndex = totalPages - currentPage;
            
            currentPage--;
            
            const prevPageElement = bookElement.children[currentPage];
            prevPageElement.style.transform = 'rotateY(0deg)';
            prevPageElement.style.zIndex = totalPages + currentPage;
            
            updateCounter();
            updateButtonStates();
        }
    }
    
    function updateCounter() {
        currentPageElement.textContent = currentPage + 1;
    }
    
    function updateButtonStates() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
    }
    
    function createBookPage(project, index) {
        const page = document.createElement('div');
        page.className = 'book-gallery__page';
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
                <div class="book-gallery__back-content">
                    <h4 class="book-gallery__back-title">Detalles del Proyecto</h4>
                    <ul class="book-gallery__back-list">
                        <li class="book-gallery__back-item"><strong>Año:</strong> ${project.details.year}</li>
                        <li class="book-gallery__back-item"><strong>Ubicación:</strong> ${project.details.location}</li>
                        <li class="book-gallery__back-item"><strong>Técnicas:</strong> ${project.details.techniques.join(', ')}</li>
                    </ul>
                    <p><strong>Resultados:</strong> ${project.details.results}</p>
                </div>
            </div>
        `;
        
        return page;
    }
    
    // Estado inicial de los botones
    updateButtonStates();
}

// Inicializar grid de proyectos para móviles
function initProjectsGrid() {
    const gridContainer = document.getElementById('projects-grid');
    
    projectsData.forEach(project => {
        const gridItem = document.createElement('div');
        gridItem.className = 'projects-grid__item';
        gridItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="projects-grid__image">
            <div class="projects-grid__content">
                <h3 class="projects-grid__item-title">${project.title}</h3>
                <span class="projects-grid__item-category">${project.category}</span>
                <p class="projects-grid__item-description">${project.description}</p>
                <a href="proyecto-detalle.html?id=${project.id}" class="projects-grid__item-link">
                    Ver detalles <span>→</span>
                </a>
            </div>
        `;
        
        gridContainer.appendChild(gridItem);
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectGallery);
} else {
    initProjectGallery();
}