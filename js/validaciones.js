const formulario = document.getElementById("form-contacto");
const nombre = formulario["nombre"];
const telefono = formulario["telefono"];
const email = formulario["email"];
const mensaje = formulario["mensaje"];

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const regexTelefono = /^[0-9]{10,14}$/;
const regexEmail = /^[\w.-]+@(gmail|hotmail|yahoo|outlook)\.(com|ar)$/;

function validar() {
  const errorNombre = document.getElementById("errorNombre");
  const errorTel = document.getElementById("errorTel");
  const errorEmail = document.getElementById("errorEmail");
  const errorMens = document.getElementById("errorMens");

  const nombreValue = nombre.value.trim();
  const telefonoValue = telefono.value.trim();
  const emailValue = email.value.trim();
  const mensajeValue = mensaje.value.trim();

  let estado = true;

  if (!regexNombre.test(nombreValue) || nombreValue === "") {
    nombre.style.borderColor = "red";
    errorNombre.style.color = "red";
    errorNombre.textContent =
      "El nombre no debe contener caracteres inválidos y no debe estar vacío.";
    estado = false;
  } else {
    nombre.style.borderColor = "black";
    errorNombre.textContent = "";
  }

  if (!regexTelefono.test(telefonoValue) || telefonoValue === "") {
    telefono.style.borderColor = "red";
    errorTel.style.color = "red";
    errorTel.textContent =
      "El teléfono debe tener entre 10 y 14 dígitos y no debe estar vacío.";
    estado = false;
  } else {
    telefono.style.borderColor = "black";
    errorTel.textContent = "";
  }

  if (!regexEmail.test(emailValue) || emailValue === "") {
    email.style.borderColor = "red";
    errorEmail.style.color = "red";
    errorEmail.textContent =
      "El email debe ser válido (gmail, hotmail, yahoo u outlook).";
    estado = false;
  } else {
    email.style.borderColor = "black";
    errorEmail.textContent = "";
  }

  if (mensajeValue.length < 20 || mensajeValue === "") {
    mensaje.style.borderColor = "red";
    errorMens.style.color = "red";
    errorMens.textContent = "El mensaje debe contener al menos 20 caracteres.";
    estado = false;
  } else {
    mensaje.style.borderColor = "black";
    errorMens.textContent = "";
  }

 
  if (estado === true) {
    mostrarDatos(nombreValue, telefonoValue, emailValue, mensajeValue);
    formulario.reset();
  }

  return false;
}

function mostrarDatos(nombre, telefono, email, mensaje) {
  let anterior = document.getElementById("datosEnviados");
  if (anterior) anterior.remove();
  const contenedor = document.createElement("div");
  contenedor.id = "datosEnviados";
  contenedor.style.marginTop = "20px";
  contenedor.style.padding = "15px";
  contenedor.style.border = "2px solid #c89b7b";
  contenedor.style.borderRadius = "10px";
  contenedor.style.backgroundColor = "#ffd6a5";


  const titulo = document.createElement("h3");
  titulo.textContent = "Datos enviados correctamente:";
  contenedor.appendChild(titulo);

 
  const lista = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = `Nombre: ${nombre}`;
  lista.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = `Teléfono: ${telefono}`;
  lista.appendChild(li2);

  const li3 = document.createElement("li");
  li3.textContent = `Email: ${email}`;
  lista.appendChild(li3);

  const li4 = document.createElement("li");
  li4.textContent = `Mensaje: ${mensaje}`;
  lista.appendChild(li4);

  contenedor.appendChild(lista);

  const formulario = document.getElementById("form-contacto");
  formulario.parentNode.appendChild(contenedor);
}