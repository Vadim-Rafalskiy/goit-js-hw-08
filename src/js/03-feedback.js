import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

let formState = {
  email: '',
  message: '',
};

getLocalStorageFormState();
restoreFormData(formState);

document.addEventListener('input', throttle(handleFormState, 500));
document.addEventListener('submit', handleSubmitDate);

function handleFormState(e) {
  saveFormData(e);
  setLocalStorageFormState();
}

function handleSubmitDate(e) {
  e.preventDefault();

  console.log(email.value);
  console.log(message.value);

  if (email.value !== '' && message.value !== '') {
    console.log(formState);
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY_STATE);
  } else {
    alert('All input must be filled');
  }
}

function setLocalStorageFormState() {
  localStorage.setItem(LOCALSTORAGE_KEY_STATE, JSON.stringify(formState));
}

function getLocalStorageFormState() {
  const State = localStorage.getItem(LOCALSTORAGE_KEY_STATE);
  formState = JSON.parse(State);
}

function saveFormData(e) {
  const value = e.target.value;
  if (e.target.name === 'email') formState.email = value;
  else formState.message = value;
}

function restoreFormData(data) {
  try {
    email.value = data.email;
    message.value = data.message;
  } catch (error) {
    formState = {
      email: '',
      message: '',
    };
  }
}
