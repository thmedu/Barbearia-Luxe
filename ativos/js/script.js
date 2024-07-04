document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os botões "Agende Agora"
    const appointmentButtons = document.querySelectorAll('.price-card .btn');
    
    // Selecionar o modal e o botão para fechar o modal
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.close');
    
    // Abrir o modal ao clicar em "Agende Agora"
    appointmentButtons.forEach(button => {
        button.addEventListener('click', () => {
            openModal();
        });
    });
    
    // Fechar o modal ao clicar no botão de fechar (×)
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });
    
    // Fechar o modal ao clicar fora da área do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Manipular o envio do formulário de agendamento
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedProfessional = document.getElementById('professional').value;
        const selectedTime = document.getElementById('time').value;
        
        // Exemplo simples de mensagem de alerta
        alert(`Horário agendado com ${selectedProfessional} às ${selectedTime}`);
        
        // Fechar o modal após o agendamento
        closeModal();
    });
    
    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'block';
    }
    
    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // Função para rolar até o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Selecionar todos os links de navegação interna no cabeçalho
    const internalLinks = document.querySelectorAll('.header a[href^="#"]');
    
    // Adicionar evento de clique para rolar suavemente até a seção correspondente
    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Selecionar o botão flutuante para rolar suavemente ao topo da página
    const floatingButton = document.querySelector('.floating-button');
    
    // Adicionar evento de clique para rolar suavemente ao topo da página
    floatingButton.addEventListener('click', () => {
        scrollToTop();
    });
    
    // Selecionar o botão do WhatsApp e adicionar atributos para abrir em nova aba
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.setAttribute('target', '_blank');
    whatsappButton.setAttribute('rel', 'noopener noreferrer');
    
    // Selecionar elementos do DOM para o menu hamburguer
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close');
    
    // Abrir menu hamburguer ao clicar no ícone
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    // Fechar menu hamburguer ao clicar no botão de fechar
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    // Fechar menu hamburguer ao clicar em um link dentro do menu
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            selectable: true,
            dateClick: function(info) {
                alert('Data selecionada: ' + info.dateStr);
                // Aqui você pode fazer algo com a data selecionada, como preencher um campo no formulário
            }
        });
        calendar.render();
    });

    var firebaseConfig = {
        apiKey: "SUA_API_KEY",
        authDomain: "SEU_DOMINIO.firebaseapp.com",
        databaseURL: "https://SEU_DOMINIO.firebaseio.com",
        projectId: "SEU_PROJECT_ID",
        storageBucket: "SEU_BUCKET.appspot.com",
        messagingSenderId: "SEU_SENDER_ID",
        appId: "SEU_APP_ID"
    };
    // Inicialize o Firebase
    firebase.initializeApp(firebaseConfig);

    var form = document.getElementById('appointment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var professional = form.professional.value;
        var time = form.time.value;
        var date = calendar.getDate(); // Suponha que você tenha uma variável 'calendar' para acessar a data selecionada
        
        // Salvar os dados no Firebase
        var appointmentsRef = firebase.database().ref('agendamentos');
        appointmentsRef.push({
            professional: professional,
            time: time,
            date: date.toISOString() // Salve a data como ISO string para facilitar o manuseio
        }).then(function() {
            alert('Agendamento realizado com sucesso!');
            // Aqui você pode adicionar lógica para fechar o modal ou limpar o formulário
        }).catch(function(error) {
            console.error('Erro ao agendar:', error);
            alert('Ocorreu um erro ao agendar. Por favor, tente novamente.');
        });
    });

// Seleciona o ícone do menu hamburguer e o menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Adiciona um evento de clique ao ícone do menu hamburguer
menuToggle.addEventListener('click', function() {
    // Alterna a classe 'active' no menu hamburguer
    mobileMenu.classList.toggle('active');
});
