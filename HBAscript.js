document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil data dari form
        const formData = new FormData(form);

        // Kirim data ke Formspree
        fetch("https://formspree.io/f/xkgodzvb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                responseMessage.textContent = "Pesan berhasil dikirim!";
                responseMessage.style.backgroundColor = "#4CAF50"; // Hijau
            } else {
                responseMessage.textContent = "Terjadi kesalahan, coba lagi.";
                responseMessage.style.backgroundColor = "#F44336"; // Merah
            }
            responseMessage.classList.remove("hidden");
            form.reset(); // Reset form setelah sukses
        })
        .catch(error => {
            responseMessage.textContent = "Terjadi kesalahan, coba lagi.";
            responseMessage.style.backgroundColor = "#F44336"; // Merah
            responseMessage.classList.remove("hidden");
        });
    });
});
