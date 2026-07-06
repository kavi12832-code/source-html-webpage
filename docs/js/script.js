document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('form-status').textContent =
                "Thanks! Your message has been noted (this is a demo form).";
            form.reset();
        });
    }
});