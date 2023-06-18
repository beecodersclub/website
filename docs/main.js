// Function to handle the button click event
function sendBudget() {
  const sendBudgetButton = document.getElementById('sendBudget');
  const loadingIndicator = document.getElementById('loadingIndicator');

  // Disable the button and show the loading indicator
  sendBudgetButton.disabled = true;
  sendBudgetButton.style.opacity = '0.5';
  loadingIndicator.style.display = 'inline';
  // Replace 'your-api-url' with the actual URL of the API
  const apiUrl = 'https://farmaciasdeplantao.info/api/contact';

  // Get form input values
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('emailBudget');
  const messageInput = document.getElementById('message');
  const phoneInput = document.getElementById('phone');

  const username = usernameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const phone = phoneInput.value;
  // Create an object with the form data
  const formData = {
    username: username,
    email: email,
    message: message,
    phone: phone
  };

  // Clear the form fields
  usernameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  phoneInput.value = '';

  axios.post(apiUrl, formData)
    .then(response => {
      console.log('API response:', response.data);
      // Do something with the API response
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
    })
    .catch(error => {
      console.error('API error:', error);
      // Handle the error
    })
    .finally(() => {
      // Re-enable the button and hide the loading indicator
      sendBudgetButton.disabled = false;
      sendBudgetButton.style.opacity = '1';
      loadingIndicator.style.display = 'none';
    });
}

// Attach event listener to the button
const sendBudgetButton = document.getElementById('sendBudget');
sendBudgetButton.addEventListener('click', sendBudget);

// Function to handle the button click event and send form data to the API
function sendFormData() {
  const sendFormDataButton = document.getElementById('sendCollaborator');
  const loadingIndicator = document.getElementById('join-form-message').querySelector('.loading-icon');

  // diasble the button and show the loading indicator
  sendFormDataButton.disabled = true;
  sendFormDataButton.style.opacity = '0.5';
  loadingIndicator.style.display = 'inline-block';
  // Replace 'your-api-url' with the actual URL of the API

  const apiUrl = 'https://farmaciasdeplantao.info/api/join';

  // Get form input values
  const collaboratorNameInput = document.getElementById('collaboratorName');
  const collaboratorEmailInput = document.getElementById('collaboratorEmail');
  const collaboratorPhoneInput = document.getElementById('collaboratorPhone');
  const collaboratorRoleInput = document.getElementById('collaboratorRole');
  const collaboratorSkillInput = document.getElementById('collaboratorSkill');

  const collaboratorName = collaboratorNameInput.value;
  const collaboratorEmail = collaboratorEmailInput.value;
  const collaboratorPhone = collaboratorPhoneInput.value;
  const collaboratorRole = collaboratorRoleInput.value;
  const collaboratorSkill = collaboratorSkillInput.value;

  // Create an object with the form data
  const formData = {
    name: collaboratorName,
    email: collaboratorEmail,
    phone: collaboratorPhone,
    role: collaboratorRole,
    skill: collaboratorSkill
  };

  // Clear the form fields
  collaboratorNameInput.value = '';
  collaboratorEmailInput.value = '';
  collaboratorPhoneInput.value = '';
  collaboratorRoleInput.value = '';
  collaboratorSkillInput.value = '';


  axios.post(apiUrl, formData)
    .then(response => {
      console.log('API response:', response.data);
      // Do something with the API response
      const successMessageFormData = document.getElementById('join-form-message');
      successMessageFormData.querySelector('.message').textContent = 'Obrigado pelo interesse! Entraremos em contato em breve.';
    })
    .catch(error => {
      console.error('API error:', error);
      // Handle the error
    })
    .finally(() => {
      // Re-enable the button and hide the loading indicator
      sendFormDataButton.disabled = false;
      sendFormDataButton.style.opacity = '1';
      loadingIndicator.style.display = 'none';
    })
}

// Attach event listener to the button
const sendCollaboratorButton = document.getElementById('sendCollaborator');
sendCollaboratorButton.addEventListener('click', sendFormData);

