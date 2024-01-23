# \***\*Responsive Holy Grail Layout with Grid\*\***

**Introducción**

---

Ahora que has hecho que tu diseño \***\*Holy Grail Layout\*\*** sea **\*\*\*\***responsive, vamos a divertirnos haciéndolo un poco más complicado y agregando algunas características. Es posible que encuentre que esto es un poco más complicado de lo esperado. Incluso podrías tener la tentación de usar Flexbox. Pero por el bien de esta tarea de práctica, intenta ver si puedes descubrir cómo recrear esta maqueta completa usando solo Grid. ¡Siéntete libre de agregar tu propio contenido ficticio o estilos también!

**Pistas**

---

- Para este ejercicio, deberás agregar algunos bloques de declaración CSS al archivo style.css. Mira a través del HTML para ver qué selectores y combinadores puede usar.
- Toma el diseño de una sección a la vez
- No necesitas agregar ni cambiar nada en el HTML, pero será útil revisar las relaciones entre elementos principales y secundarios.
- Al igual que con Flexbox, puedes centrar fácilmente un elemento convirtiéndolo en una cuadrícula.
- No te preocupes por el estiramiento del elemento de imagen del marcador de posición al cambiar el tamaño de la ventana del navegador.

Si has entendido bien el uso de Grid e investigado por tu cuenta puedes hacer que las cards [title + lorem ipsum] se ajusten a tu pantalla.

**Autoevaluación**

---

- El elemento contenedor tiene dos columnas.
- La segunda columna del contenedor es 4 veces más grande que la primera columna.
- El elemento contenedor tiene un espacio de 4px.
- El elemento de encabezado tiene dos columnas.
- El ul dentro del elemento del menú contiene otra cuadrícula.
- El ul dentro del elemento de navegación contiene otra cuadrícula.
- El elemento de la barra lateral tiene un espacio de 50px
  Los elementos de texto en la barra lateral están centrados con cuadrícula.
- El elemento del artículo debe establecer columnas de cuadrícula usando repetir junto con las propiedades de ajuste automático y minmax.
- Las columnas del artículo deben tener un valor mínimo de 250px y un máximo de 1fr unidad.
- El elemento del artículo tiene un espacio de 15px.
- Los elementos de la tarjeta dentro del contenedor del artículo tienen una altura de 200px.
- El encabezado y el pie de página abarcan ambas columnas.
  La barra lateral solo se extiende a lo largo de la primera columna.
- Los elementos de navegación y artículo solo se extienden a lo largo de la segunda columna.

Html code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Holy Grail Mockup</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">

      <div class="header">
        <div class="logo">Header Logo</div>
        <div class="menu">
          <ul>
            <li>link one</li>
            <li>link two</li>
            <li>link three</li>
            <li>link four</li>
          </ul>
        </div>
      </div>

      <div class="sidebar">
        <div class="photo">
          <p>placeholder for image</p>
        </div>
        <div class="side-content">Box 1
        </div>
        <div class="side-content">Box 2
        </div>
        <div class="side-content">Box 3
        </div>
      </div>

      <div class="nav">
        <ul>
          <li>Element one</li>
          <li>Element two</li>
          <li>Element three</li>
        </ul>
      </div>

      <div class="article">
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
        <div class="card">
          <p class="title">Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
        </div>
      </div>

      <div class="footer">
        <p>Copyright © The Power Rock Code
      </div>

    </div>

  </body>
</html>

Css code

- {
  margin: 0;
  padding: 0;
  }

.container {
text-align: center;
}

.container div {
padding: 15px;
font-size: 32px;
font-family: Helvetica;
font-weight: bold;
color: white;
}

.header {
background-color: #393f4d;
}

.menu ul,
.menu li {
font-size: 16px;
}

.sidebar {
background-color: #FF7755;
}

.sidebar .photo {
background-color: white;
color: black;
font-size: 12px;
font-weight: normal;
border-radius: 10px;
}

.sidebar .side-content {
background-color: white;
color: black;
font-size: 16px;
font-weight: normal;
}

.nav {
background-color: #FF7755;
}

.nav ul li {
font-size: 16px;
text-transform: uppercase;
}

.article {
background-color: #bccbde;
}

.article p {
font-size: 18px;
font-family: sans-serif;
color: white;
text-align: left;
}

.article .card {
background-color: #FFFFFF;
color: black;
text-align: center;
}

.card p {
color: black;
font-weight: normal;
font-size: 14px;
}

.card .title {
font-size: 18px;
text-align: center;
}

.footer {
background-color: #393f4d;
}

.footer p {
font-size: 13px;
font-weight: normal;  
}
