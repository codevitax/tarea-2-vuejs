Vue.component("menu-drone", {
  
  template: //html
  `<nav class="navbar navbar-expand-lg " style="background-color: gray;">
  <div class="container-fluid">
      <a class="navbar-brand" href="#"> {{configuracionPagina.marca}} </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" :href="configuracionPagina.menus[0].url">{{configuracionPagina.menus[0].etiqueta}}</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" :href="configuracionPagina.menus[1].url">{{configuracionPagina.menus[1].etiqueta}}</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
`,
  data: function () {
    return {
      configuracionPagina: {
        marca: "MegaDron",
        menuColor: "ligthblue",
        footerColor: "slategrey",
        precioEstilos: "background: orangered; color: white; font-weight: bold",
        menus: [
          {
            etiqueta: "Inicio",
            url: "",
          },
          {
            etiqueta: "Tienda",
            url: "",
          },
        ],
      },
    };
  },
});
