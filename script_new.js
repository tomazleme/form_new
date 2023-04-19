const STEP_1 = 'step-1';
const STEP_2 = 'step-2';
const STEP_3S = 'step-3S';
const STEP_3N = 'step-3N';

function hideAllSteps() {
  const formSteps = document.querySelectorAll('.form-step');
  formSteps.forEach((step) => {
    step.style.display = 'none';
  });
}

function showStep(stepId) {
  const step = document.getElementById(stepId);
  step.style.display = 'block';
}

function initForm() {
  // Adicione event listeners e lógica do formulário aqui.

  hideAllSteps();
  showStep(STEP_1);
}

initForm();
