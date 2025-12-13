document.addEventListener('DOMContentLoaded', function() {

    // VARIÁVEL CRÍTICA DE CONFIGURAÇÃO


    // --- 1. Menu mobile (Seletor ajustado com base na sua provável estrutura) ---
    const mobileMenu = document.querySelector('.mobile-menu'); // Seletor do ícone hamburger
    const navMenu = document.querySelector('nav ul'); // Seletor da lista de links

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // --- 2. Header scroll effect ---
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header') || document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

   // --- 3. Envio de Formulário (Integração WhatsApp - Versão Robusta) ---
// Localize a variável no topo do seu arquivo JS
const WHATSAPP_NUMBER = '5569992308825'; 

// --- FUNÇÃO ÚNICA DE ENVIO PARA O WHATSAPP ---
function enviarSolicitacaoWhatsApp(event) {
    
    // Opcional, mas útil se o botão fosse type="submit"
    event.preventDefault(); 

    // 1. Captura e Trim dos dados (Usando os IDs do seu formulário)
    const clientName = document.getElementById('name').value.trim();
    const clientEmail = document.getElementById('email').value.trim();
    const clientPhone = document.getElementById('phone').value.trim();
    const clientSituation = document.getElementById('situation').value.trim();
    
    // 2. Validação: Checa se todos os campos estão preenchidos
    if (!clientName || !clientEmail || !clientPhone || !clientSituation) {
        alert('Por favor, preencha todos os campos obrigatórios para prosseguir.');
        return; // Sai da função se a validação falhar
    }

    // 3. Construção da Mensagem
    const message = 
        `📣 SOLICITAÇÃO DE AGENDAMENTO (via Website)\n\n` +
        `*Nome do Cliente:* ${clientName}\n` +
        `*E-mail:* ${clientEmail}\n` +
        `*Telefone de Contato:* ${clientPhone}\n\n` +
        `*Situação/Consulta:* ${clientSituation}\n\n` +
        `Aguardo um retorno.`;

    // 4. Codificação e Criação da URL (Usando sua estrutura 'wa.me')
    const msgFormatada = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msgFormatada}`;
    
    // 5. Redirecionamento
    const submitBtn = document.getElementById('submit-button');
    if (submitBtn) {
        submitBtn.textContent = 'Redirecionando...';
        submitBtn.disabled = true;
    }

    // Usamos window.open para manter a lógica do seu projeto de portfólio
    window.open(url, '_blank');
    
    // Opcional: Limpar o formulário após o redirecionamento
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        // Um pequeno atraso para dar tempo ao navegador de iniciar o redirecionamento
        setTimeout(() => {
            appointmentForm.reset();
            if (submitBtn) {
                submitBtn.textContent = 'Enviar Solicitação';
                submitBtn.disabled = false;
            }
        }, 1000);
    }
}

// --- Anexar a Função no Carregamento do Documento ---
// Certifique-se de que este código está dentro do seu bloco DOMContentLoaded
const submitBtn = document.getElementById('submit-button');
if (submitBtn) {
    submitBtn.addEventListener('click', enviarSolicitacaoWhatsApp);
}
    // --- 4. Scroll Animations ---
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

}); // FIM DO DOMContentLoaded