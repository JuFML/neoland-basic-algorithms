# The Holy Grail Layout

**Introducción**

---

Ahora es el momento de practicar las herramientas de grid que hemos aprendido y crear un diseño que pueda parecerle familiar. Vamos a hacer un Diseño del Santo Grial como los que creamos usando Flexbox. La diferencia aquí es que no confiaremos en Flexbox. Solo usaremos Grid. ¡Podrás ver los beneficios de Grid por ti mismo!

**Pistas**

---

- Solo necesitas agregar contenido a los selectores de CSS.
- Consulta la sesión tantas veces como sea necesario.
- Usa tamaños de pista fijos (por ejemplo, píxeles) para sus columnas y filas.

**Autoevaluación**

---

- El gap es de 15px
- La grilla tiene dos columnas.
- La cuadrícula tiene cuatro filas.
- La segunda columna es dos veces más grande que la primera.
- La tercera fila es cinco veces más grande que las demás.
- Los elementos de encabezado y pie de página abarcan ambas columnas.
- El elemento de la barra lateral solo se extiende a lo largo de la primera columna.
- Los elementos de navegación y artículo se extienden a lo largo de la segunda columna.

Html code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Holy Grail</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="header">Header</div>
      <div class="sidebar">Sidebar</div>
      <div class="nav">Nav</div>
      <div class="article">Article
        <p>Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur bibendum turpis quis interdum semper. Sed at pharetra neque, nec lacinia diam. Suspendisse quis faucibus mi, aliquam porttitor ipsum. Vivamus condimentum eros id mattis pharetra. Duis varius eros nibh. Donec a venenatis eros. Fusce in mauris massa. Donec est metus, rhoncus eu leo sed, aliquet posuere nisl.</p>
        <p>Cras ut ex in nibh accumsan ullamcorper. Fusce rutrum, metus id porta porttitor, leo ipsum congue velit, eu hendrerit lectus nisi a odio. Pellentesque tristique eros id nibh finibus euismod. Cras suscipit volutpat elit eget pulvinar. Vivamus at blandit leo. Aenean sodales ex non massa efficitur, et egestas neque dapibus. In consequat hendrerit ex, nec finibus magna faucibus eu. Aliquam a libero non erat sollicitudin condimentum. In ac fringilla nisi. Sed pharetra ut turpis id luctus. Proin posuere tortor ac tempus luctus. Donec vitae est et neque faucibus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <div class="footer">Footer</div>
    </div>
  </body>
</html>

Css code
body, html {
height: 100%;
margin: 0;
}

.container {
text-align: center;
height: 100%;
padding: 16px;
box-sizing: border-box;
}

.container div {
padding: 15px;
font-size: 32px;
font-family: Helvetica;
font-weight: bold;
color: white;
border-radius: 15px;
}

.header {
background-color: #FFDE22;
}

.sidebar {
background-color: #FF7755;
}

.nav {
background-color: #00DDFF;
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

.footer {
background-color: #393f4d;
}
