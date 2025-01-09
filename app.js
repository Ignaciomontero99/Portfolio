(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    fetch(form.action, {
        method: form.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }).then(response => {
        if (response.ok) {
            alert('Mensaje enviado con éxito');
            form.reset();
        } else {
            alert('Error al enviar el mensaje');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje');
    });

    return false;
}