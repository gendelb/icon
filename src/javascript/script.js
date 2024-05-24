document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqAnswer = item.nextElementSibling;
        const isActive = faqAnswer.classList.contains('active');
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('active');
        });
        if (!isActive) {
            faqAnswer.classList.add('active');
        }
    });
});

function showContact(contactClass) {
    var contactElement = document.querySelector('.' + contactClass);

    // Verifica se o contato já está visível
    if (contactElement.classList.contains('show')) {
        // Se já estiver visível, esconde-o
        contactElement.classList.remove('show');
    } else {
        // Esconde todos os contatos
        document.querySelectorAll('.contato').forEach(function(el) {
            el.classList.remove('show');
        });
        
        // Mostra o contato correspondente
        contactElement.classList.add('show');
    }
}