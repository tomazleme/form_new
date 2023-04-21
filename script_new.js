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
  const checked = document.querySelector('#step2A input[type="radio"]:checked');
  const checkedOption = checked.value;
  let selectedOption;
  const radioInputs = document.querySelectorAll('#step2A input[type="radio"]');
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
 
// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A1
function handleStep2A1Back() {
  showStep('step2A');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A2
function handleStep2A2Back() {
  showStep('step2A');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A3
function handleStep2A3Back() {
  showStep('step2A');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A3A
function handleStep2A3ABack() {
  showStep('step2A3');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A3A1
function handleStep2A3A1Back() {
  showStep('step2A3A');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2A3A2
function handleStep2A3A2Back() {
  showStep('step2A3A');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2B1
function handleStep2B1Back() {
  showStep('step2B');
}

// Função para lidar com o evento de clique no botão "Voltar" do Passo 2B2
function handleStep2B2Back() {
  showStep('step2B1');
}
 
// FUNÇÃO PARA ADCIONAR EVENT LISTENERS
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

// Adiciona um event listener para o botão "Voltar" do Passo 2A1
document.querySelector('#step2A1 .btn-my-custom[aria-current="back-step2A"]').addEventListener('click', handleStep2A1Back);

// Adiciona um event listener para o botão "Voltar" do Passo 2A2
document.querySelector('#step2A2 .btn-my-custom[aria-current="back-step2A"]').addEventListener('click', handleStep2A2Back);

// Adiciona um event listener para o botão "Voltar" do Passo 2A3
document.querySelector('#step2A3 .btn-my-custom[aria-current="back-step2A"]').addEventListener('click', handleStep2A3Back);


// Adiciona event listener do Passo 2A3 verifica se o dominio é valido ou se quer que registre
document.querySelector('#step2A3 .btn-my-custom[aria-current="step"]').addEventListener('click', () => {
  const domainInput = document.querySelector('#input_domain');
  const domainRadio1 = document.querySelector('#domain-1');
  const domainRadio2 = document.querySelector('#domain-2');
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i;
  if (!domainRegex.test(domainInput.value)) {
    alert('Please enter a valid domain');
  } else if (!domainRadio1.checked && !domainRadio2.checked) {
    alert('Please select one of the options');
  } else {
    showStep('step2A3A');
  }
});

// Adiciona um event listener para o botão "Voltar" do Passo 2A3A
document.querySelector('#step2A3A .btn-my-custom[aria-current="back-step2A3"]').addEventListener('click', handleStep2A3ABack);

// Adiciona um event listener para o botão "Continuar" do Passo 2A3A
document.querySelector('#step2A3A .btn-my-custom[aria-current="step"]').addEventListener('click', () => {
  const siteType1 = document.querySelector('#siteType1');
  const siteType2 = document.querySelector('#siteType2');
  if (siteType1.checked) {
    showStep('step2A3A1');
  } else if (siteType2.checked) {
    showStep('step2A3A2');
  } else {
    alert('Please select one of the options');
  }
});

// Adiciona um event listener para o botão "Voltar" do Passo 2A3A1
document.querySelector('#step2A3A1 .btn-my-custom[aria-current="back-step2A3A"]').addEventListener('click', handleStep2A3A1Back);

// Adiciona um event listener para o botão "Voltar" do Passo 2A3A2
document.querySelector('#step2A3A2 .btn-my-custom[aria-current="back-step2A3A"]').addEventListener('click', handleStep2A3A2Back);

// Adiciona um event listener para o botão "Continuar" do Passo 2B para o Passo 2B1
document.querySelector('#step2B .btn-my-custom[aria-current="step2B1"]').addEventListener('click', () => {
  showStep('step2B1');
});

// Adiciona um event listener para o botão "Voltar" do Passo 2B1
document.querySelector('#step2B1 .btn-my-custom[aria-current="back-step2"]').addEventListener('click', handleStep2B1Back);

// Adiciona um event listener para o botão "Continuar" do Passo 2B1 para o Passo 2B2
document.querySelector('#step2B1 .btn-my-custom[aria-current="step2B2"]').addEventListener('click', () => {
  showStep('step2B2');
});

// Adiciona um event listener para o botão "Voltar" do Passo 2B2
document.querySelector('#step2B2 .btn-my-custom[aria-current="back-step2"]').addEventListener('click', handleStep2B2Back);

// Função para inicializar o estado do formulário, mostrando o Passo 1
function initializeForm() {
  showStep('step1');
  addEventListeners();
}

// Adiciona um event listener para quando a página for carregada
document.addEventListener('DOMContentLoaded', initializeForm);
