const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("redirect", "false");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado correctamente",
                text: "Gracias por ponerte en contacto.",
                confirmButtonColor: "#3085d6"
            });

            form.reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Hubo un problema",
                text: data.message,
                confirmButtonColor: "#b00020"
            });
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Intenta nuevamente.",
            confirmButtonColor: "#b00020"
        });
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
