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

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2
function handleStep2Back() {
  showStep('step1');
}
// Função para lidar com o evento de clique no botão "Continuar" do Passo 2
function handleStep2Submit() {
  const select = document.querySelector('#step2 select');
  const selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption === 'a') {
    showStep('step2A');
  } else if (selectedOption === 'b') {
    showStep('step2B');
  }
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A
function handleStep2ABack() {
  showStep('step2');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2B
function handleStep2BBack() {
  showStep('step2');
}

// Função para lidar com o evento de clique no botão "Continuar" do Passo 2A
function handleStep2ASubmit() {
  const radioInputs = document.querySelectorAll('#radio-2A input[type="radio"]');
  let selectedOption;

  radioInputs.forEach((input) => {
    if (input.checked) {
     selectedOption = input.id;
   }
 });

  if (selectedOption === '1p2A') {
    showStep('step2A1');
   } else if (selectedOption === '2p2A') {
    showStep('step2A2');
   } else if (selectedOption === '3p2A') {
    showStep('step2A3');
   }
 }
 
 // Função para lidar com o evento de clique no botão "Continuar" do Passo 2A, opção "Site completo"
 

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

// Adiciona um event listener para o botão "Voltar" do Passo 2
  document.querySelector('#step2 .btn-my-custom[aria-current="back-step1"]').addEventListener('click', handleStep2Back);
}

// Adiciona um event listener para o botão "Continuar" do Passo 2
document.querySelector('#step2 .btn-my-custom[aria-current="step"]').addEventListener('click', handleStep2Submit);

// Adiciona um event listener para o botão "Voltar" do Passo 2A
document.querySelector('#step2A .btn-my-custom[aria-current="back-step2"]').addEventListener('click', handleStep2ABack);


// Adiciona um event listener para o botão "Voltar" do Passo 2B
document.querySelector('#step2B .btn-my-custom[aria-current="back-step2"]').addEventListener('click', handleStep2BBack);

// Adiciona um event listener para o botão "Continuar" do Passo 2A
document.querySelector('#step2A .btn-my-custom[aria-current="step"]').addEventListener('click', handleStep2ASubmit);


// Adicionar os novos event listeners


// Função para inicializar o estado do formulário, mostrando o Passo 1
function initializeForm() {
  showStep('step1');
  addEventListeners();
}

// Adiciona um event listener para quando a página for carregada
document.addEventListener('DOMContentLoaded', initializeForm);
