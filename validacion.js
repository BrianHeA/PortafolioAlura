function validacion(){
  if (document.querySelector('input[name="nombre"]').value === ""){
    alert('El nombre no puede estar vacío');
    return false
  }

  if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i.test(document.querySelector('input[name="email"]').value)) {
    alert('El correo electrónico no es válido');
    return false
  }

  if (document.querySelector('input[name="asunto"]').value === ""){
    alert('El asunto no puede estar vacío');
    return false
  }

  if (document.querySelector('input[name="mensaje"]').value === ""){
    alert('El mensaje no puede estar vacío');
  }

  return true
}

document.querySelector('form').addEventListener('submit', validacion)



