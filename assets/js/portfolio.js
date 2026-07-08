// =============================================
// PORTFOLIO PAGE JS — assets/js/portfolio.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // === FILTER TABS ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.4s ease both';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

});
