    // Selecionar todos os botões "Agende Agora"
    const appointmentButtons = document.querySelectorAll('.price-card .btn');

    // Selecionar o modal e o botão para fechar o modal
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    // Abrir o modal ao clicar em "Agende Agora"
    appointmentButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    // Fechar o modal ao clicar no botão de fechar (×)
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o modal ao clicar fora da área do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Manipular o envio do formulário de agendamento
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedProfessional = document.getElementById('professional').value;
        const selectedTime = document.getElementById('time').value;
        
        // Aqui você pode adicionar lógica para enviar os dados do agendamento para o backend
        // Exemplo simples de mensagem de alerta
        alert(`Horário agendado com ${selectedProfessional} às ${selectedTime}`);
        
        // Fechar o modal após o agendamento
        modal.style.display = 'none';
    });

  // Função para rolar até o topo da página
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}