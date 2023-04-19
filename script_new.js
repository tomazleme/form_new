// Função para mostrar um passo específico do formulário e esconder os outros
function showStep(stepId) {
  // Seleciona todos os elementos que têm um ID começando com "step"
  const steps = document.querySelectorAll('[id^="step"]');

  // Percorre cada passo e define sua propriedade 'display' como 'block' ou 'none', dependendo se é o passo ativo
  steps.forEach((step) => {
    step.style.display = step.id === stepId ? 'block' : 'none';
  });
}

// Função para inicializar o estado do formulário, mostrando o Passo 1
function initializeForm() {
  showStep('step1');
}

// Adiciona um event listener para o botão "Continuar" do Passo 1
document.querySelector('#step1 .btn-my-custom[aria-current="step2"]').addEventListener('click', () => {
  // Quando o botão "Continuar" é clicado, chama a função `showStep` com o ID do Passo 2
  showStep('step2');
});

// Adiciona um event listener para quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  // Quando a página é carregada, chama a função `initializeForm` para configurar o estado inicial do formulário
  initializeForm();
});
