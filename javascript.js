document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.preview-link');
    
    links.forEach(link => {
        // Crear el contenedor de previsualización
        const preview = document.createElement('div');
        preview.className = 'preview-container';
        
        // Construir el contenido de la previsualización
        preview.innerHTML = `
            <div class="preview-content">
                <img class="preview-image" src="${link.dataset.image}" alt="Preview">
                <div class="preview-info">
                    <p class="preview-title">
                        <img class="site-icon" src="${link.dataset.favicon}" alt="Site icon">
                        ${link.dataset.title}
                    </p>
                    <p class="preview-description">${link.dataset.description}</p>
                </div>
            </div>
        `;
        
        link.appendChild(preview);
        
        // Mostrar/ocultar la previsualización
        link.addEventListener('mouseenter', () => {
            preview.style.display = 'block';
        });
        
        link.addEventListener('mouseleave', () => {
            preview.style.display = 'none';
        });
    });
});