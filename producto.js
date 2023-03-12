Vue.component("producto", {
  data: function () {
    return {
      producto: {
        id: 1,
        imagen:
          "https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motorsin.jpg_Q90.jpg_.webp",
        nombre: "Dron LU3 MAX GPS 8K HD",
        descripcion:
          "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
        precio: "620",
        colores: ["red", "blue", "black", "yellow"],
      },
      pedido: {
        id: null,
        cantidad: 1,
        color: null,
      },
    };
  },

  template: //html
  `<div class="container">
        <div class="row">
            <h3>{{producto.nombre}}</h3>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 ">
                <img :src="producto.imagen"
                    alt="" width="100%">
            </div>
            <div class="col-12 col-sm-6  col-md-8">
                <h6>{{producto.descripcion}}</h6>
                <div class="p-3 mb-2 text-white" style="background-color: gray;">
                    Precio: {{producto.precio * pedido.cantidad}} BOB
                </div>
                <h5>Color</h5>
                <div>

                    <div v-for="color in producto.colores" class="color-box clic" style="background:red"></div>
                
                </div>
                <h5>Cantidad</h5>
                <div class="quantity">
                    <button v-on:click="pedido.cantidad-=1">-</button> <div>{{pedido.cantidad}}</div> <button v-on:click="pedido.cantidad += 1">+</button>
                </div>
                <div class="buy-box">
                    <button type="button" class="btn btn-primary">Comprar</button>
                </div>
                
            </div>
        </div>
    </div>
    `,
});
