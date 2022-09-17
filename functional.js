const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validator_value) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validator_value;
  }
}

function createUser(username, password) {
  console.log(username, password);
  if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error('Invalid input - username or password is wrong (password should be at least eight characters).');
  }
  return {
    username: username,
    password: password
  }
}

function getUserInput(input_element_id) {
  return document.getElementById(input_element_id).value;
}

function greetUser(user) {
  console.log('Hi ', user.username);
}

function signupHandler(event) {
  event.preventDefault();

  const username = getUserInput('username');
  const password = getUserInput('password');

  try {
    const new_user = createUser(username, password);
    greetUser(new_user);
  } catch (err) {
    alert(err.message);
  }

  validate();
}

function connectForm(form_id, form_submit_handler) {
  const form = document.getElementById(form_id);
  form.addEventListener('submit', form_submit_handler);
}

connectForm('register-form', signupHandler);