document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (nombre === '' || email === '' || asunto === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (mensaje === '') {
            alert('El campo Mensaje no puede estar vacío.');
            return;
        }

        if (mensaje.length > 300) {
            alert('El campo Mensaje no puede contener más de 300 caracteres.');
            return;
        }

        
        alert('Formulario enviado con éxito.');
        form.reset(); 
    });
});
