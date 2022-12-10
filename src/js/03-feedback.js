import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formState = {};

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
  form.reset();
  console.log(formState);
  localStorage.removeItem(LOCALSTORAGE_KEY_STATE);
}

function setLocalStorageFormState() {
  localStorage.setItem(LOCALSTORAGE_KEY_STATE, JSON.stringify(formState));
}

function getLocalStorageFormState() {
  const State = localStorage.getItem(LOCALSTORAGE_KEY_STATE);
  formState = JSON.parse(State);
  // formState = JSON.parse(State) !== null ? JSON.parse(State) : {};
}

function saveFormData(e) {
  const value = e.target.value;
  if (e.target.name === 'email') formState.email = value;
  else formState.message = value;
}

function restoreFormData(data) {
  try {
    form.email.value = data.email;
    form.message.value = data.message;
  } catch (error) {
    console.log(error.email, "cant't reade data");
    console.log(error.message, "cant't reade data");
    formState = {};
  }
}
