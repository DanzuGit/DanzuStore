let slideIndex = 0;

function tampilkanSlide() {
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

// Fungsi geser slide otomatis
function geserSlide() {
  const slides = document.querySelectorAll('.slide');
  slideIndex = (slideIndex + 1) % slides.length;
  tampilkanSlide();
}

// Tampilkan slide pertama kali dan mulai auto-slide
document.addEventListener('DOMContentLoaded', () => {
  tampilkanSlide();
  setInterval(geserSlide, 4000); // Auto-slide setiap 5 detik
});


window.onload = function() {
  // Simulasikan proses loading selama 5 detik
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Tambahkan transisi fade-out pada loading screen
    loadingScreen.style.opacity = '0';

    // Setelah transisi fade-out selesai, sembunyikan loading screen
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block'; // Tampilkan konten utama
      mainContent.classList.add('fade-in'); // Tambahkan transisi fade-in
    }, 1000); // Sesuaikan dengan durasi transisi fade-out (1 detik)
  }, 2000); // Durasi loading: 5 detik
};