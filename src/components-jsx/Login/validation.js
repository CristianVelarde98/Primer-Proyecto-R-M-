export default function validate(inputs) {
  const errors = {};
  const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  if (inputs.username != "hola") {
    errors.username = "Correo invalido";
  }

  if (inputs.password != "chau") {
    errors.password = "Contraseña incorrecta";
  }

  return errors;
}

// !regexUsername.test(inputs.username) &&
//   !inputs.username &&
//   inputs.username > 35;

// regexPassword.test(inputs.regexpassword)
