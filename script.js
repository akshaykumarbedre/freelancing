// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to success stats
    const stats = document.querySelectorAll('.stat-item .per');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            stat.textContent = Math.round(current) + '%';
            if (current >= target) {
                clearInterval(timer);
                stat.textContent = target + '%';
            }
        }, 20);
    });
});

const stats = document.querySelectorAll('.stat-item .add');
stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        stat.textContent = Math.round(current) + '+';
        if (current >= target) {
            clearInterval(timer);
            stat.textContent = target + '+';
        }
    }, 20);
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the project carousel
    var projectCarousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
        interval: 5000,
        wrap: true
    });

    // Add click event listeners to carousel controls
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        projectCarousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        projectCarousel.next();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const coverImage = document.querySelector('.coverimage12');
    console.log('Background image:', getComputedStyle(coverImage).backgroundImage);
    console.log('Element dimensions:', coverImage.offsetWidth, 'x', coverImage.offsetHeight);
});
