document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Manejo de modales para talleres
    const workshopLinks = document.querySelectorAll('.workshop-footer');
    const modal = document.getElementById('workshop-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (modal && closeModal) {
        workshopLinks.forEach(link => {
            link.addEventListener('click', function() {
                const workshopType = this.getAttribute('data-workshop');
                updateModalContent(workshopType);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Previene el scroll del body
            });
        });
        
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura el scroll
        });
        
        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Actualizar contenido del modal según el taller seleccionado
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
                title: 'Habilidades Socioemocionales',
                audience: 'Niños, niñas y adolescentes',
                duration: 'Sesiones de 60 minutos, frecuencia semanal',
                description: '<p>Desarrollamos competencias para gestionar emociones, resolver conflictos y fortalecer la autoestima.</p><p>Creamos un espacio seguro donde expresar y comprender las emociones.</p>',
                benefits: [
                    'Mejora de la inteligencia emocional',
                    'Desarrollo de habilidades para resolver conflictos',
                    'Fortalecimiento de la autoestima',
                    'Mejora de las relaciones interpersonales'
                ]
            },
            'asesoramiento-instituciones': {
                title: 'Asesoramiento a Instituciones',
                audience: 'Escuelas y centros educativos',
                duration: 'Consultoría personalizada según necesidades',
                description: '<p>Ofrecemos consultoría en adaptaciones curriculares, estrategias de inclusión y abordaje de necesidades específicas.</p><p>Trabajamos con el equipo docente para implementar estrategias efectivas.</p>',
                benefits: [
                    'Desarrollo de estrategias de inclusión',
                    'Adaptaciones curriculares personalizadas',
                    'Capacitación a equipos docentes',
                    'Acompañamiento en la implementación de programas'
                ]
            }
        };
        
        if (workshopData[workshopType]) {
            const data = workshopData[workshopType];
            
            modalTitle.textContent = data.title;
            modalAudience.textContent = data.audience;
            modalDuration.textContent = data.duration;
            modalDescription.innerHTML = data.description;
            
            // Limpiar y actualizar lista de beneficios
            benefitsList.innerHTML = '';
            data.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });
        }
    }
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora solo mostramos un mensaje de éxito simulado
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
});
