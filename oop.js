class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value, flag, validator_value) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validator_value;
    }
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  greet() {
    console.log('Hi ', this.username);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('register-form');
    this.username_input = document.getElementById('username');
    this.password_input = document.getElementById('password');
    
    this.form.addEventListener('submit', this.signup_handler.bind(this));
  }

  signup_handler(event) {
    event.preventDefault();
    const username = this.username_input.value;
    const password = this.password_input.value;

    if (
      !Validator.validate(username, Validator.REQUIRED) || 
      !Validator.validate(password, Validator.MIN_LENGTH, 5)
      ) {
        alert('Invalid input - username or password is wrong (password should be at least eight characters).');
        return;
    }
    
    const new_user = new User(username, password);
    console.log(new_user);
    new_user.greet();
  }
}

new UserInputForm();