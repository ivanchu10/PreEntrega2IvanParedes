function masIVA(precio, iva,) {
    iva = iva || 21;
    let conIVA = precio + (precio * iva) / 100;
    return conIVA;
  }
  
  let precio = Number(prompt("Por favor, ingrese el precio de un producto"));
  let iva = Number(
    prompt("Ahora, ingrese el IVA del producto si es que lo tiene")
  );
  let resultadoFinal = Number(
    prompt("Ahora, ingrese el Descuento del producto si es que lo tiene")
  );
  
  
  if (iva < 0) {
    let resultado = masIVA(precio, iva);
  } else {
    let resultado = masIVA(precio);
    alert("Precio con IVA: " + resultado);
  }

  