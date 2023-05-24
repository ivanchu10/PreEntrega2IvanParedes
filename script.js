function buscarProductoPorId(id) {
    return productos.find(producto => producto.id === id);
  }

class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const productos = [
    new Producto(1, "Producto 1", 1000),
    new Producto(2, "Producto 2", 2000),
    new Producto(3, "Producto 3", 3000)
  ];
  
  function calcularValorFinal() {
    const seleccion = parseInt(prompt("Ingrese el número del producto seleccionado:\n\n" +
      "1. Producto 1\n" +
      "2. Producto 2\n" +
      "3. Producto 3"));
  
    if (isNaN(seleccion) || seleccion < 1 || seleccion > productos.length) {
      alert("Selección inválida. Inténtelo de nuevo.");
      return;
    }
  
    const producto = buscarProductoPorId(seleccion);
  
    const impuestos = parseFloat(prompt("Ingrese el porcentaje de impuestos:"));
    const descuentos = parseFloat(prompt("Ingrese el porcentaje de descuentos:"));
  
    if (isNaN(impuestos) || isNaN(descuentos) || impuestos < 0 || descuentos < 0) {
      alert("Valores inválidos. Inténtelo de nuevo.");
      return;
    }
  
    const precioFinal = calcularPrecioFinal(producto.precio, impuestos, descuentos);
  
    alert("El valor final del producto " + producto.nombre + " es: $" + precioFinal.toFixed(2));
  }
  
  function calcularPrecioFinal(precio, impuestos, descuentos) {
    const precioImpuestos = precio * (1 + impuestos / 100);
    const precioDescuentos = precioImpuestos * (1 - descuentos / 100);
    return precioDescuentos;
  }
  
  calcularValorFinal();
  