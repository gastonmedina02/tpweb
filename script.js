function enviarFormulario() {
    const emailInput = document.getElementById('email');
    const inputContainer = emailInput.parentElement;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        inputContainer.classList.add('invalid');
    } else {
        inputContainer.classList.remove('invalid');

        const mensajeExito = document.getElementById('mensaje-exito');
        mensajeExito.style.display = 'block';

       
        const datosFormulario = {
            email: emailInput.value
        };
        
        fetch('https://tu-servidor.com/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosFormulario)
        })
        .then(response => response.json())
        .then(data => {
            alert('Formulario enviado con éxito');
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar el formulario.');
        });
    }
}

