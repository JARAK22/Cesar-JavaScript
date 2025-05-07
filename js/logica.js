function calPrecioTotal() {
  let precio = parseInt(document.getElementById("precio").value)
  let iva = parseInt(document.getElementById("iva").value)

  if (precio && iva) {
    let totalPrecio = precio + (precio * iva) / 100
    document.getElementById("totalPre").innerHTML =
      "El precio total a pagar es de: " + "$" + totalPrecio
  } else {
    alert("Por favor llena ambos campos.")
  }
}

function perimetoCuadrado() {
  let ladoCuadrado = parseInt(document.getElementById("LCuadrado").value)
  if (ladoCuadrado) {
    let area = ladoCuadrado * ladoCuadrado
    let perimetro = ladoCuadrado * 4
    document.getElementById("pCuadrado").innerHTML =
      "El perimetro del cuadrado es: " + perimetro
    document.getElementById("aCuadrado").innerHTML =
      "El area del cuadrado es: " + area
  } else {
    alert("Por favor llena ambos campos.")
  }
}

function nombreUsuario() {
  let nombre = document.getElementById("usurio").value
  if (nombre) {
    document.getElementById("textNombre").innerHTML = "Hola " + nombre + "!"
  } else {
    alert("Por favor llena ambos campos.")
  }
}

function valorMedio() {
  let num1 = parseInt(document.getElementById("numero1").value)
  let num2 = parseInt(document.getElementById("numero2").value)
  let num3 = parseInt(document.getElementById("numero3").value)
  if (num1 && num2 && num3) {
    /*if (num1 > num2 && num1 < num3) {
      document.getElementById("numeroMedio").innerHTML =
        "El valor del medio es: " + num1
    } else if (num2 > num1 && num2 < num3) {
      document.getElementById("numeroMedio").innerHTML =
        "El valor del medio es: " + num2
    }else {
    	document.getElementById("numeroMedio").innerHTML =
      "El valor del medio es: " + num3
    }*/
    let media = (num1 + num2 + num3) / 3;
    document.getElementById("numeroMedio").innerHTML =
        "La media de los tres numeros es: " + media
  } else {
    alert("Por favor llena ambos campos.")
  }
}