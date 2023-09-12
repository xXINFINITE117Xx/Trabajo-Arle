// Clase base Producto
class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalPagar(cantidad) {
      return cantidad * this.precioCompra;
    }
  }
  
  // Subclase PrendaVestir
  class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  // Subclase Calzado
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
    }
  }
  
  // Crear instancias de productos de tipo PrendaVestir y Calzado
  const prendasDeVestir = [
    new PrendaVestir('PV001', 'Blusa de algodón', 20, 40, 30, 10, 100, 10, 'M', true),
    new PrendaVestir('PV002', 'Jeans clásicos', 30, 60, 40, 20, 150, 15, 'L', true),
    // Agrega más prendas si es necesario
  ];
  
  const calzados = [
    new Calzado('C001', 'Tenis deportivos', 40, 80, 50, 15, 200, 20, 38),
    new Calzado('C002', 'Zapatos formales', 50, 100, 60, 25, 250, 25, 42),
    // Agrega más calzados si es necesario
  ];
  
  // Para acceder a los atributos y métodos de un producto:
  // Ejemplo para la primera prenda de vestir
  const primeraPrenda = prendasDeVestir[0];
  console.log(primeraPrenda.descripcion); // Imprime "Blusa de algodón"
  console.log(primeraPrenda.solicitarPedido()); // Devuelve true o false dependiendo de la cantidad en bodega
  
  // Ejemplo para el segundo calzado
  const segundoCalzado = calzados[1];
  console.log(segundoCalzado.precioVenta); // Imprime 100
  
  // Ahora puedes integrar este código con tu HTML y agregar botones para interactuar con las instancias de productos.

  
  function mostrarInfoPrenda() {
    const primeraPrenda = prendasDeVestir[0];
    alert(`Descripción: ${primeraPrenda.descripcion}, Talla: ${primeraPrenda.talla}, Permite Planchado: ${primeraPrenda.permitePlanchado}`);
  }

  function mostrarInfoCalzado() {
    const segundoCalzado = calzados[1];
    alert(`Descripción: ${segundoCalzado.descripcion}, Talla: ${segundoCalzado.talla}`);
  }

  function solicitarPedidoPrenda() {
    const primeraPrenda = prendasDeVestir[0];
    const debeSolicitar = primeraPrenda.solicitarPedido();
    if (debeSolicitar) {
      alert('Debe solicitar el producto al proveedor.');
    } else {
      alert('No es necesario solicitar el producto al proveedor en este momento.');
    }
  }

  function solicitarPedidoCalzado() {
    const segundoCalzado = calzados[1];
    const debeSolicitar = segundoCalzado.solicitarPedido();
    if (debeSolicitar) {
      alert('Debe solicitar el producto al proveedor.');
    } else {
      alert('No es necesario solicitar el producto al proveedor en este momento.');
    }
  }
