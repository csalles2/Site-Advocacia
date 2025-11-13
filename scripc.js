
        // Menu mobile
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navMenu = document.querySelector('nav ul');
            
            mobileMenu.addEventListener('click', function() {
                navMenu.classList.toggle('show');
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Form submission
            const submitBtn = document.querySelector('.submit-btn');
            
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Validação simples
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const situation = document.getElementById('situation').value;
                
                if (name && email && phone && situation) {
                    // Simulação de envio
                    submitBtn.textContent = 'Enviando...';
                    submitBtn.disabled = true;
                    
                    setTimeout(function() {
                        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
                        document.querySelector('.appointment-form').reset();
                        submitBtn.textContent = 'Enviar Solicitação';
                        submitBtn.disabled = false;
                    }, 1500);
                } else {
                    alert('Por favor, preencha todos os campos.');
                }
            });
            
            // Scroll animations
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('active');
                    }
                });
            };
            
            // Check on load
            fadeInOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', fadeInOnScroll);
        });
    