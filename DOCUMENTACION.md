# 📖 Documentación del Proyecto: Arqueología y Restauración

**Versión:** 1.0  
**Fecha de inicio:** 2024-09-05

## 1. Resumen del Proyecto

Este proyecto es el sitio web oficial para de arqueología y restauración. Su objetivo es servir como portafolio digital para atraer nuevos clientes, mostrar la metodología de trabajo y detallar los proyectos realizados.

## 2. Pila Tecnológica (Tech Stack)

* **Lenguajes:** HTML5, CSS3, JavaScript (ES6+)
* **Metodología:** Desarrollo modular basado en componentes, diseño responsive (Mobile-First).
* **Librerías/Frameworks:** Ninguno por ahora (Vanilla JS).
* **Herramientas:** (Puedes añadir aquí si usas alguna, ej: Live Server en VSCode).

## 3. Estructura de Archivos

Una breve descripción de las carpetas principales:

* **/partials:** Contiene los fragmentos de HTML que se repiten o se cargan dinámicamente (header, footer, secciones, etc.).
* **/css:** Contiene todos los estilos, organizados en subcarpetas (base, components, utilities).
* **/js:** Contiene todo el código JavaScript, organizado por componentes y utilidades.
* **/imagenes:** Contiene todos los assets visuales del proyecto.

---

## 4. Guía de Componentes

Aquí documentaremos cada pieza del sitio web a medida que se construye.

---

### **Componente: Base del CSS (Global Styles)**
* **Estado:** ✅ Terminado
* **Descripción:** Establece los estilos fundamentales y las variables que se usarán en todo el sitio para mantener la consistencia.
* **Archivos Involucrados:**
    * `css/base/reset.css`: Normaliza los estilos por defecto del navegador.
    * `css/base/variables.css`: Define la paleta de colores, tipografías y espaciados.
    * `css/base/global.css`: Aplica estilos básicos al `<body>`, `<a>`, etc.
* **Dependencias:** Ninguna. Es la base de todo lo demás.
* **Uso:** Estos archivos se importan al inicio del `css/styles.css` principal y afectan a todo el sitio.
* **Notas:** Cualquier cambio en `variables.css` tendrá un impacto global.

---

### **Componente: Header Global**
* **Estado:** 🚧 En Progreso / ✅ Terminado (actualizar según avances)
* **Descripción:** Es el encabezado principal del sitio. Contiene el logo y el menú de navegación principal. Es 'sticky', por lo que siempre está visible.
* **Archivos Involucrados:**
    * `partials/header.html`: La estructura HTML del componente.
    * `css/components/header.css`: Los estilos específicos para el header.
    * `js/components/navigation.js`: La lógica para el menú en móviles (ej. abrir/cerrar menú hamburguesa).
* **Dependencias:**
    * Necesita las variables definidas en `css/base/variables.css`.
* **Conexiones:**
    * Los enlaces de navegación apuntan a las diferentes secciones o páginas del sitio.
* **Uso:** Se carga en la parte superior de `index.html` y de todas las páginas principales.
* **Notas:** El comportamiento del menú en móviles está controlado por `navigation.js`.

---

### **Componente: Hero Section**
* **Estado:** ❌ Pendiente
* **Descripción:** Es la primera sección visual que ve el usuario. Su objetivo es captar la atención con una imagen de fondo y un titular potente.
* **Archivos Involucrados:**
    * `partials/hero.html`: Estructura HTML.
    * `css/components/hero.css`: Estilos (imagen de fondo, tipografía, botón).
* **Dependencias:**
    * `css/base/variables.css` para colores y fuentes.
* **Conexiones:**
    * El botón "Ver Proyectos" debe enlazar a la sección de proyectos.
* **Uso:** Se usa como la sección principal en `index.html`.
* **Notas:** La imagen de fondo debe estar optimizada para no afectar el tiempo de carga.

---

### **(Copia y pega esta plantilla para cada nuevo componente)**

### **Componente: [Nombre del Componente]**
* **Estado:** ❌ Pendiente
* **Descripción:** [¿Qué es y qué hace?]
* **Archivos Involucrados:**
    * `partials/...`
    * `css/components/...`
    * `js/components/...`
* **Dependencias:** [¿Necesita alguna librería o variable para funcionar?]
* **Conexiones:** [¿A qué otras partes del sitio se conecta?]
* **Uso:** [¿En qué página(s) se muestra este componente?]
* **Notas:** [Cualquier detalle extra que sea importante recordar].