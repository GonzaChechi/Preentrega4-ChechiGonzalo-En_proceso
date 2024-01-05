const botonesEnviarMail =[];
listaClientes.forEach((elemento, index) => {
    botonesEnviarMail.push(document.getElementById(`botonEnviarMail${index+1}`)) ;
});


botonesEnviarMail.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const cliente = listaClientes[index];
        enviarPorFormSubmit(cliente);
    });
});

function enviarPorFormSubmit(datosCliente) {
    const urlFormSubmit = `https://formsubmit.co/${datosCliente.correo}`;
    const payload = {
        to: "Gonzalo Chechi Freelancer",
        subject: 'Respuesta a su consulta',
        message: `Aquí están los datos: ${JSON.stringify(datosCliente)}`
    };

    fetch(urlFormSubmit, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (response.ok) {
                console.log('Correo electrónico enviado correctamente a través de FormSubmit');
                Swal.fire({
                    title: "Correo enviado exitosamente!",
                    icon: "success"
                });
            } else {
                console.error('Error al enviar el correo electrónico a través de FormSubmit');
                Swal.fire({
                    title: "Correo no se pudo enviar!",
                    icon: "success"
                });
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
}