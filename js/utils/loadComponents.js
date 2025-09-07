// Función para cargar componentes HTML
export async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Error al cargar ${filePath}: ${response.status}`);
        }
        const html = await response.text();
        
        // Insertar el HTML
        const container = document.getElementById(componentId);
        if (container) {
            container.innerHTML = html;
            
            // Ejecutar scripts dentro del componente
            const scripts = container.querySelectorAll('script');
            for (let script of scripts) {
                if (script.src) {
                    // Para scripts externos
                    await loadExternalScript(script.src);
                } else {
                    // Para scripts inline
                    executeInlineScript(script.textContent);
                }
            }
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Cargar script externo
async function loadExternalScript(src) {
    return new Promise((resolve, reject) => {
        // Convertir rutas relativas a absolutas
        const absoluteSrc = convertRelativePath(src);
        
        const script = document.createElement('script');
        script.src = absoluteSrc;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Ejecutar script inline
function executeInlineScript(code) {
    try {
        new Function(code)();
    } catch (error) {
        console.error('Error executing inline script:', error);
    }
}

// Convertir rutas relativas a absolutas
function convertRelativePath(path) {
    if (path.startsWith('../')) {
        return path.replace('../', './');
    }
    if (path.startsWith('./')) {
        return path;
    }
    return './' + path;
}

// Cargar todos los componentes
export function loadAllComponents() {
    const components = [
        { id: 'header-container', file: './partials/header.html' },
        { id: 'hero-container', file: './partials/hero.html' },
        { id: 'acerca-container', file: './partials/acerca.html' },
        { id: 'footer-container', file: './partials/footer.html' }
    ];
    
    components.forEach(comp => {
        loadComponent(comp.id, comp.file);
    });
}