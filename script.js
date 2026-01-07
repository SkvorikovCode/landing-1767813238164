document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Change icon based on state (optional visual flair)
        const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
        menuBtn.innerHTML = `<i data-lucide="${icon}" class="w-8 h-8"></i>`;
        lucide.createIcons();
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = `<i data-lucide="menu" class="w-8 h-8"></i>`;
            lucide.createIcons();
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-neutral-950/95');
            navbar.classList.remove('bg-neutral-950/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-neutral-950/95');
            navbar.classList.add('bg-neutral-950/90');
        }
    });

    // Add to Cart Animation Simulation
    const addButtons = document.querySelectorAll('button');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Check if it's an "Add" button (contains plus icon)
            if(this.querySelector('[data-lucide="plus"]')) {
                const originalContent = this.innerHTML;
                
                // Visual feedback
                this.classList.add('bg-green-600', 'hover:bg-green-700');
                this.classList.remove('bg-neutral-800', 'hover:bg-red-600');
                this.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i>`;
                lucide.createIcons();

                // Revert after 1.5s
                setTimeout(() => {
                    this.classList.remove('bg-green-600', 'hover:bg-green-700');
                    this.classList.add('bg-neutral-800', 'hover:bg-red-600');
                    this.innerHTML = originalContent;
                    lucide.createIcons();
                }, 1500);
            }
        });
    });
});