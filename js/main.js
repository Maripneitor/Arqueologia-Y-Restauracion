// Importación de componentes
import './components/header.js';
import './components/hero.js';
import './components/acerca.js';
import './components/proyectos.js';

// Importación de utilidades
import { loadAllComponents } from './utils/loadComponents.js';

// Inicialización de componentes
document.addEventListener('DOMContentLoaded', function() {
  loadAllComponents();
  console.log('Sitio cargado - ArqueoRestaura');
});