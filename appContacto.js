// contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');

  // Regex robusta para validar formato de email (no garantiza existencia)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  function showError(msg) {
    feedback.textContent = msg;
    feedback.style.color = '#b00020';
  }
  function showSuccess(msg) {
    feedback.textContent = msg;
    feedback.style.color = '#0d7a4f';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // VALIDACIONES CLIENT
    if (!name || name.length < 2) {
      showError('Por favor escribe tu nombre (mínimo 2 caracteres).');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showError('Por favor escribe un email válido.');
      return;
    }

    if (!subject || subject.length < 3) {
      showError('Por favor escribe el asunto (mínimo 3 caracteres).');
      return;
    }

    if (!message || message.length < 10) {
      showError('Por favor escribe un mensaje más largo (mínimo 10 caracteres).');
      return;
    }

    // Desactivar botón y mostrar estado
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (!response.ok) {
        const err = await response.json().catch(()=>({error:'Error del servidor'}));
        throw new Error(err.error || 'Error al enviar el mensaje.');
      }

      const data = await response.json();
      showSuccess(data.message || 'Mensaje enviado correctamente.');

      // reset opcional
      form.reset();
    } catch (err) {
      console.error(err);
      showError(err.message || 'Ocurrió un error inesperado. Intenta más tarde.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});
