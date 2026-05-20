/*
========================================
MINI ECOMMERCE - BOILERPLATE
========================================

TECNOLOGÍAS:
- JavaScript
- Fetch API
- LocalStorage
- SessionStorage

FASES:
1. Productos
2. Filtros
3. Carrito
4. EXTRA Persistencia
5. EXTRA Login
6. EXTRA Sesión
7. EXTRA Favoritos

========================================
*/


// ========================================
// SELECTORES DEL DOM
// ========================================

// Contenedor productos
const productsContainer =
  document.getElementById("productsContainer");

// Contenedor carrito
const cartContainer =
  document.getElementById("cartContainer");

// Total carrito
const cartTotal =
  document.getElementById("cartTotal");

// Buscador
const searchInput =
  document.getElementById("searchInput");

// Filtro categorías
const categoryFilter =
  document.getElementById("categoryFilter");

// Ordenación
const sortSelect =
  document.getElementById("sortSelect");

// Modal login
const loginModal =
  document.getElementById("loginModal");

// Botón abrir login
const accountBtn =
  document.querySelector(".account-btn");

// Botón cerrar login
const closeLogin =
  document.getElementById("closeLogin");

// Formulario login
const loginForm =
  document.getElementById("loginForm");

const card = document.createElement("product-card");
// ========================================
// VARIABLES GLOBALES
// ========================================

// Productos API
//let products = [];

// Productos filtrados
let filteredProducts = [];

// Carrito
let cart = [];

// Favoritos
let favorites = [];


// ========================================
// FASE 1 - FETCH PRODUCTOS
// ========================================

/*
OBJETIVO:
Obtener productos desde la API.

ENDPOINT:
https://fakestoreapi.com/products

CONCEPTOS:
- fetch()
- promesas
- .then()
- .catch()

TAREAS:
- Hacer petición fetch
- Convertir respuesta a JSON
- Guardar productos
- Pintar productos
- Pintar categorías
*/
function getProducts() {
   
  let url = "https://fakestoreapi.com/products";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      renderProducts(data);
      renderCategories(data);
      //console.log(data);
    })
    .catch(error => console.error("Hubo un error en la Tienda ", error))
   
}

function renderProducts(productsArray) {
  const productsContainer = document.querySelector("#productsContainer");
  productsContainer.innerHTML = "";
  productsArray.forEach(articulo => montarProducts(articulo));
}


// Creamos el HTML dinámico usando los datos que nos da la API
function montarProducts(producto) {
  const productsContainer = document.querySelector("#productsContainer");
  productsContainer.innerHTML += `
      <article class="product-card">
        <div class="product-image">
          <img src="${producto.image}" alt="${producto.title}">
        </div>
        <div class="product-info">
          <p class="product-category">${producto.category}</p>
          <h3 class="product-title">${producto.title}</h3>
          <p class="product-price">${producto.price}€</p>
          <div class="card-actions">
            <button class="add-btn">Añadir</button>
            <button class="fav-btn">🤍</button>
          </div>
        </div>
      </article>
    `;

}

getProducts();




/*
========================================
¿QUÉ DEVUELVE LA API?
========================================

La API devuelve un ARRAY de productos.

Ejemplo:

[
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    description: "Your perfect pack...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/..."
  }
]



========================================
¿CÓMO ACCEDER A LOS DATOS?
========================================

product.title
product.price
product.category
product.image

========================================
EJEMPLO RECORRIENDO PRODUCTOS
========================================
*/
products.forEach(product => {

  renderProducts(product) ;

});



//function getProducts() {

  // TODO

//}


// ========================================
// FASE 1 - RENDER PRODUCTOS
// ========================================

/*
OBJETIVO:
Pintar productos dinámicamente.

MOSTRAR:
- Imagen
- Título
- Precio
- Categoría
- Botón carrito
- Botón favorito

PISTA:
Usar:
- innerHTML
- createElement
- appendChild
*/

console.log(products[1].title)


/*
========================================
PISTA RENDERIZADO
========================================

Ejemplo creando una card:

const card = document.createElement("article");

card.innerHTML = `
  <h2>${product.title}</h2>
`;

productsContainer.appendChild(card);

========================================
*/

/*
function renderProducts(product) {
  productsContainer.innerHTML +=
    `   
    <article class="product-card">
        <div class="product-image">
          <img
            src="${product.image}"
            alt="${product.title}"
          >
        </div>
        <div class="product-info">
          <p class="product-category">
            ${product.category}
          </p>
          <h3 class="product-title">
            ${product.title}
          </h3>
          <p class="product-price">
            ${product.price}
          </p>
          <div class="card-actions">
            <button class="add-btn">
            </button>
            <button class="fav-btn">
              🤍
            </button>
          </div>
        </div>
      </article>
      `;
       console.log(card)
 // productsContainer.appendChild(card);

  // TODO

}
  */


// ========================================
// FASE 2 - CATEGORÍAS
// ========================================

/*
OBJETIVO:
Generar categorías dinámicamente.

TAREAS:
- Obtener categorías únicas
- Crear options
- Añadir al select

PISTA:
new Set()
*/

function renderCategories(productsArray) {



}


// ========================================
// FASE 2 - FILTROS
// ========================================

/*
OBJETIVO:
Filtrar productos dinámicamente.

REQUISITOS:
- Buscar por nombre
- Filtrar por categoría
- Ordenar:
  - precio ascendente
  - precio descendente
  - A-Z
  - Z-A

PISTA:
- filter()
- sort()
- localeCompare()
*/


function filterProducts() {

  // TODO

}


// ========================================
// EVENTOS FILTROS
// ========================================

searchInput.addEventListener(
  "input",
  filterProducts
);

categoryFilter.addEventListener(
  "change",
  filterProducts
);

sortSelect.addEventListener(
  "change",
  filterProducts
);


// ========================================
// FASE 3 - CARRITO
// ========================================

/*
OBJETIVO:
Añadir productos al carrito.

TAREAS:
- Buscar producto por ID
- Añadir al array carrito
- Incrementar cantidad si ya existe
- Guardar carrito
- Renderizar carrito
*/


function addToCart(id) {

  // TODO

}


/*
OBJETIVO:
Eliminar producto del carrito.
*/


function removeFromCart(id) {

  // TODO

}


/*
OBJETIVO:
Pintar carrito dinámicamente.

MOSTRAR:
- Nombre
- Cantidad
- Precio
- Total carrito
*/


function renderCart() {

  // TODO

}


// ========================================
// FASE 4 - LOCAL STORAGE
// ========================================

/*
========================================
EXTRA
========================================
*/


/*
OBJETIVO:
Guardar carrito en localStorage.

PISTA:
JSON.stringify()
*/


function saveCart() {

  // TODO

}


/*
OBJETIVO:
Recuperar carrito guardado.

PISTA:
JSON.parse()
*/


function loadCart() {

  // TODO

}


// ========================================
// FASE 7 - FAVORITOS
// ========================================

/*
========================================
EXTRA
========================================
*/


/*
OBJETIVO:
Guardar productos favoritos.

TAREAS:
- Añadir favoritos
- Eliminar favoritos
- Guardar en localStorage
- Recuperar favoritos
*/


function toggleFavorite(id) {

  // TODO

}



function loadFavorites() {

  // TODO

}


// ========================================
// FASE 5 - LOGIN
// ========================================

/*
========================================
EXTRA
========================================
*/


/*
OBJETIVO:
Simular login con FakeStoreAPI.

ENDPOINT:
https://fakestoreapi.com/auth/login

USUARIO TEST:
mor_2314
83r5^_

CONCEPTOS:
- fetch POST
- JSON.stringify()
- sessionStorage

TAREAS:
- Capturar formulario
- Enviar datos
- Guardar token
- Cerrar modal
*/

loginForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    // TODO

  }
);


// ========================================
// FASE 6 - SESIÓN
// ========================================

/*
========================================
EXTRA
========================================
*/


/*
OBJETIVO:
Mantener sesión iniciada.

TAREAS:
- Detectar token
- Mostrar login si no existe
*/

function checkSession() {

  // TODO

}


/*
OBJETIVO:
Cerrar sesión.

TAREAS:
- Eliminar token
- Cerrar modal
*/


function logout() {

  // TODO

}


// ========================================
// MODAL LOGIN
// ========================================

/*
========================================
EXTRA
========================================
*/


/*
OBJETIVO:
Abrir modal login.
*/

accountBtn.addEventListener(
  "click",
  () => {

    // TODO

  }
);


/*
OBJETIVO:
Cerrar modal login.
*/

closeLogin.addEventListener(
  "click",
  () => {

    // TODO

  }
);


/*
OBJETIVO:
Cerrar modal clicando fuera.
*/

loginModal.addEventListener(
  "click",
  (e) => {

    // TODO

  }
);


// ========================================
// INIT APP
// ========================================

/*
OBJETIVO:
Inicializar la aplicación.

TAREAS:
- Obtener productos
- Cargar carrito
- Cargar favoritos
- Comprobar sesión
*/


function init() {

  // TODO

}


// Iniciar aplicación
init();