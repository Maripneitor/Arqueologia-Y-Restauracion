// js/data/proyectosData.js

// MEJORA: Centralizamos todos los datos de los proyectos en un único archivo.
// Esto facilita el mantenimiento y asegura que la información sea consistente en todo el sitio.
export const projectsData = [
    {
        id: 1,
        title: "Restauración de Templo Maya",
        category: "Arqueología",
        // CORRECCIÓN: Usamos las imágenes locales que subiste.
        image: './assets/images/proyectos/palenque/despues-restauracion.jpeg',
        description: "Restauración integral del Templo de las Inscripciones en Palenque, México. Un trabajo de conservación que incluyó limpieza láser y consolidación estructural.",
        details: {
            year: "2018-2020",
            location: "Palenque, México",
            client: "Museo Nacional de Antropología",
            techniques: ["Limpieza láser", "Consolidación estructural", "Documentación 3D"],
            results: "Estabilización completa de la estructura y recuperación de inscripciones jeroglíficas.",
            beforeImage: './assets/images/proyectos/palenque/antes-restauracion.jpeg',
            afterImage: './assets/images/proyectos/palenque/despues-restauracion.jpeg',
            processImages: [
                './assets/images/proyectos/palenque/proceso-1.jpeg',
                'https://placehold.co/400x300/594C45/F8F5F2?text=Proceso+2',
                'https://placehold.co/400x300/8C7B6B/F8F5F2?text=Proceso+3'
            ]
        }
    },
    {
        id: 2,
        title: "Conservación de Frescos Romanos",
        category: "Pintura Mural",
        // CORRECCIÓN: Usamos un placeholder funcional y consistente (placehold.co)
        image: "https://placehold.co/600x400/C8A97E/FFFFFF?text=Pompeya",
        description: "Proyecto de conservación preventiva y restauración de frescos romanos del siglo I d.C. en Pompeya.",
        details: {
            year: "2019",
            location: "Pompeya, Italia",
            client: "Parque Arqueológico de Pompeya",
            techniques: ["Consolidación de soporte", "Limpieza química", "Reintegración cromática"],
            results: "Estabilización de los frescos y recuperación de colores originales.",
            beforeImage: 'https://placehold.co/800x450/C8A97E/FFFFFF?text=Antes',
            afterImage: 'https://placehold.co/800x450/8C7B6B/FFFFFF?text=Después',
            processImages: []
        }
    },
    // Puedes añadir más proyectos aquí siguiendo la misma estructura.
];