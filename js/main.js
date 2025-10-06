import { createNavbar } from './components/navbar.js';
import { createTOC } from './components/toc.js';
import { createTribeCards } from './components/tribe-cards.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    app.innerHTML = `
        ${createNavbar()}
        <main class="container mx-auto px-4 py-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">اخماس قبيلة أيتوســــى</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">موسوعة شاملة لقبائل واخماس أيتوســــى، تعرض التقسيمات العائلية والانتماءات القبلية بشكل مفصل ومنظم.</p>
            </div>
            ${createTOC()}
            ${createTribeCards()}
        </main>
        ${createFooter()}
    `;

    // Mobile Menu Toggle
    window.toggleMobileMenu = function() {
        const navList = document.getElementById('navList');
        navList.classList.toggle('active');
    };

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navList = document.getElementById('navList');
        if (!event.target.closest('.nav-wrapper')) {
            navList.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                document.getElementById('navList').classList.remove('active');
            }
        });
    });
});
