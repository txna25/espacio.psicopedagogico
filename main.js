// Función para abrir el modal
function openModal(workshopType) {
    const modal = document.getElementById('workshop-modal');
    if (modal) {
        // Actualiza el contenido del modal según el taller
        updateModalContent(workshopType);
        // Muestra el modal añadiendo la clase active
        modal.classList.add('active');
        // Previene el scroll del body
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('workshop-modal');
    if (modal) {
        // Oculta el modal quitando la clase active
        modal.classList.remove('active');
        // Restaura el scroll
        document.body.style.overflow = 'auto';
    }
}

// Función para actualizar el contenido del modal
function updateModalContent(workshopType) {
    const modalTitle = document.getElementById('modal-title');
    const modalAudience = document.getElementById('modal-audience');
    const modalDuration = document.getElementById('modal-duration');
    const modalDescription = document.querySelector('.modal-description');
    const benefitsList = document.querySelector('.benefits-list');
    
    const workshopData = {
        'apoyo-escolar': {
            title: 'Apoyo Escolar Personalizado',
            audience: 'Estudiantes de primaria y secundaria',
            duration: 'Sesiones de 60 minutos, frecuencia a convenir',
            description: '<p>Nuestro programa de apoyo escolar se adapta a las necesidades específicas de cada estudiante, reforzando contenidos escolares y desarrollando estrategias de aprendizaje efectivas.</p><p>Trabajamos en coordinación con la escuela para alinear objetivos y potenciar el rendimiento académico.</p>',
            benefits: [
                'Mejora del rendimiento académico',
                'Desarrollo de autonomía en el estudio',
                'Aumento de la motivación y confianza',
                'Adquisición de métodos de estudio personalizados'
            ]
        },
        'tecnicas-estudio': {
            title: 'Técnicas de Estudio',
            audience: 'Adolescentes y jóvenes',
            duration: 'Sesiones de 60 minutos, frecuencia semanal',
            description: '<p>Brindamos herramientas prácticas para optimizar el tiempo de estudio, mejorar la concentración y preparar exámenes de manera efectiva.</p><p>Adaptamos las técnicas al estilo de aprendizaje de cada estudiante para maximizar resultados.</p>',
            benefits: [
                'Optimización del tiempo de estudio',
                'Mejora de la concentración y memoria',
                'Preparación efectiva para exámenes',
                'Reducción de la ansiedad académica'
            ]
        },
        'estimulacion-cognitiva': {
            title: 'Estimulación Cognitiva',
            audience: 'Niños y niñas de 4 a 10 años',
            duration: 'Sesiones de 45 minutos, frecuencia semanal',
            description: '<p>A través de actividades lúdicas, potenciamos habilidades cognitivas fundamentales como atención, memoria, razonamiento y procesamiento de información.</p><p>Creamos un ambiente divertido donde el aprendizaje se convierte en juego.</p>',
            benefits: [
                'Desarrollo de la atención sostenida',
                'Fortalecimiento de la memoria de trabajo',
                'Mejora del razonamiento lógico',
                'Estimulación del pensamiento creativo'
            ]
        },
        'orientacion-familias': {
            title: 'Orientación a Familias',
            audience: 'Padres, madres y cuidadores',
            duration: 'Sesiones de 60 minutos, frecuencia quincenal',
            description: '<p>Brindamos asesoramiento para acompañar procesos educativos y mejorar desafíos en el aprendizaje desde casa.</p><p>Trabajamos en conjunto con las familias para crear estrategias efectivas de apoyo.</p>',
            benefits: [
                'Herramientas para acompañar el proceso educativo',
                'Estrategias para manejar dificultades de aprendizaje',
                'Mejora de la comunicación familia-escuela',
                'Creación de rutinas y hábitos efectivos'
            ]
        },
        'habilidades-socioemocionales': {
