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
document.addEventListener('DOMContentLoaded', function () {
    const moreButtons = document.querySelectorAll('.more-btn');
    const modalTitle = document.getElementById('projectModalLabel');
    const modalImg = document.getElementById('projectModalImg');
    const modalDesc = document.getElementById('projectModalDesc');

    moreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const imgSrc = this.getAttribute('data-img');
            const description = this.getAttribute('data-description');

            modalTitle.textContent = title;
            modalImg.src = imgSrc;
            modalDesc.textContent = description;
        });
    });
});
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        
        // Toggle current answer
        answer.style.display = isOpen ? 'none' : 'block';
        question.classList.toggle('active', !isOpen);
    });
});document.addEventListener('DOMContentLoaded', function() {
    var projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var title = button.getAttribute('data-title');
        var img = button.getAttribute('data-img');
        var description = button.getAttribute('data-description');
        
        var modalTitle = projectModal.querySelector('.modal-title');
        var modalImg = projectModal.querySelector('#projectModalImg');
        var modalDesc = projectModal.querySelector('#projectModalDesc');
        
        modalTitle.textContent = title;
        modalImg.src = img;
        modalDesc.textContent = description;
    });
});