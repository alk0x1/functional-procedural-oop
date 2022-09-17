const form = document.getElementById('register-form');

function signup_handler(event) {
  event.preventDefault();

  const user_input = document.getElementById('username');
  const username = user_input.value;

  const password_input = document.getElementById('password');
  const password = password_input.value;

  if (username.trim().length === 0) {
    alert('Username must not be empty');
    return;
  }
  if (password.trim().length <= 8) {
    alert('Password must have at least 8 characters');
    return;
  }

  const user = {
    username: username,
    password: password
  }
  console.log("user: ", user);
}

form.addEventListener('submit', signup_handler);
