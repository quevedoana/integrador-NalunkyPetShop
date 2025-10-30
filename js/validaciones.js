const formulario = document.getElementById("form-contacto");
const nombre = formulario["nombre"];
const telefono = formulario["telefono"];
const email = formulario["email"];
const mensaje = formulario["mensaje"];

const regexNombre = /^[A-Z-a-z-ÁÉÍÓÚáéíóúÑñ\s]+$/;
const regexTelefono = /^[0-9]{10,14}$/;
const regexEmail = /^(\w)+@(gmail|hotmail|yahoo|outlook)(\.com|\.ar)$/;

function validar() {
  
  const errorNombre = document.getElementById("errorNombre");
  const errorTel = document.getElementById("errorTel");
  const errorEmail = document.getElementById("errorEmail");
  const errorMens = document.getElementById("errorMens");

  const nombreValue = nombre.value;
  const telefonoValue = telefono.value.trim();
  const emailValue = email.value.trim();
  const mensajeValue = mensaje.value;
  let estado = true;
  
  if (!regexNombre.test(nombreValue) || nombreValue === "") {
    nombre.style.borderColor = "red";
    errorNombre.style.color = "red";
    errorNombre.textContent =
      "El nombre no debe contener caracteres invalidos y no debe estar vacio.";
    errorNombre.textAlign = "left";
    errorNombre.style.top = "21%";
    errorNombre.style.display = "block";
    estado = false;
  } else {
    nombre.style.borderColor = "black";
    errorNombre.textContent = "";
  }

  if (!regexTelefono.test(telefonoValue) || telefonoValue === "") {
    telefono.style.borderColor = "red";
    errorTel.style.color = "red";
    errorTel.textContent =
      "El Telefono no debe contener caracteres invalidos y no debe estar vacio.";
    errorTel.textAlign = "left";
    errorTel.style.top = "21%";
    errorTel.style.display = "block";
    estado = false;
  } else {
    telefono.style.borderColor = "black";
    errorTel.textContent = "";
  }

  if (!regexEmail.test(emailValue) || emailValue === "") {
    email.style.borderColor = "red";
    errorEmail.style.color = "red";
    errorEmail.textContent =
      "El Email no debe contener caracteres invalidos y no debe estar vacio.";
    errorEmail.textAlign = "left";
    errorEmail.style.top = "21%";
    errorEmail.style.display = "block";
    estado = false;
  } else {
    email.style.borderColor = "black";
    errorEmail.textContent = "";
  }

  if (mensajeValue.lenght < 20 || mensajeValue === "") {
    mensaje.style.borderColor = "red";
    errorMens.style.color = "red";
    errorMens.textContent = "El Mensaje debe contener al menos 20 caracteres.";
    errorMens.textAlign = "left";
    errorMens.style.top = "21%";
    errorMens.style.display = "block";
    estado = false;
  } else {
    mensaje.style.borderColor = "black";
    errorMens.textContent = "";
  }

  if (estado === true) {
    alert("Formulario enviado correctamente!");
    formulario.reset();
    return false;
  } else {
    return false;
  }
}
