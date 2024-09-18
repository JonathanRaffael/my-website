// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Mengambil id target dari href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smooth scrolling
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Show alert on WhatsApp button click (optional)
const whatsappButton = document.querySelector('.whatsapp-button');

whatsappButton.addEventListener('click', function() {
    alert('You will be redirected to WhatsApp.'); // Optional, bisa dihapus jika tidak diperlukan.
});

// Optional: Add sticky header effect when scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
