// Função para mostrar um passo específico do formulário e esconder os outros
function showStep(stepId) {
  const steps = document.querySelectorAll('[id^="step"]');
  steps.forEach((step) => {
    step.style.display = step.id === stepId ? 'block' : 'none';
  });
}

// Função para validar o endereço de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para lidar com o evento de clique ou pressionar Enter no Passo 1
function handleStep1Submit() {
  const emailInput = document.querySelector('#email-step1');
  const email = emailInput.value;

  if (isValidEmail(email)) {
    showStep('step2');
  } else {
    alert('Por favor, insira um endereço de email válido.');
  }
}

// Função para adicionar event listeners
function addEventListeners() {
  // Adiciona um event listener para o botão "Continuar" do Passo 1
  document.querySelector('#step1 .btn-my-custom[aria-current="step2"]').addEventListener('click', handleStep1Submit);

  // Adiciona um event listener ao campo de email para lidar com a tecla Enter
  document.querySelector('#email-step1').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleStep1Submit();
    }
  });
}

// Função para inicializar o estado do formulário, mostrando o Passo 1
function initializeForm() {
  showStep('step1');
  addEventListeners();
}

// Adiciona um event listener para quando a página for carregada
document.addEventListener('DOMContentLoaded', initializeForm);
