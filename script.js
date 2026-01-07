document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Change icon based on state
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

    // Add to Cart Animation
    const addButtons = document.querySelectorAll('.group-btn');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Visual feedback
            const originalContent = this.innerHTML;
            
            // Success state
            this.classList.remove('bg-neutral-800', 'hover:bg-red-600');
            this.classList.add('bg-green-600');
            this.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i><span>Добавлено</span>`;
            lucide.createIcons();
            
            // Revert after 2 seconds
            setTimeout(() => {
                this.classList.remove('bg-green-600');
                this.classList.add('bg-neutral-800', 'hover:bg-red-600');
                this.innerHTML = originalContent;
                lucide.createIcons();
            }, 2000);

            // Animate Cart Icon in Header
            const cartBadge = document.querySelector('.fa-shopping-bag ~ span') || document.querySelector('button .bg-red-600');
            if (cartBadge) {
                let count = parseInt(cartBadge.innerText);
                cartBadge.innerText = count + 1;
                cartBadge.classList.add('scale-125');
                setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
            }
        });
    });
});