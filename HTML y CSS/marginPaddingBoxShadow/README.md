# Margin, padding and box-shadow

**Introducción**

---

Edita el fichero style.css para conseguir el resultado propuesta en la siguiente imagen.

Autoevaluación
El titulo tiene un margen a la izquierda de 4rem.
La imagen tiene que tener una sombra de 10px 5px 5px con un color black semi-transparente.
Hay que centrar la imagen en base a su contenedor con el margen automático haciendo uso de la propiedad display correspondiente.
Los párrafos tienen un padding de 10rem solo a los lados horizontales.
Los párrafos tienen un margen de 4 rem en todas partes menos abajo.
Tanto el padding como el margen en los párrafos tiene que ser declarado en una sola línea.
Html code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Margin and padding</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Titulo</h1>
      <div class="image-container">
        <img src="https://picsum.photos/536/354" alt="random photo" />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        quidem repellat dicta possimus. Consequatur nobis blanditiis
        perspiciatis, debitis animi sunt molestiae iusto repellat commodi
        doloremque architecto excepturi nulla dicta maxime!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, modi id!
        Et, voluptatem. Voluptatibus iste necessitatibus voluptate! Quaerat odit
        natus nostrum corporis perferendis nam, voluptatem soluta autem amet
        pariatur. Officiis.
      </p>
    </div>
  </body>
</html>
​
Css code
@import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@300;400;700&display=swap");

- {
  font-family: "Anek Telugu", sans-serif;
  }

h1 {

}

.image-container {
width: 100%;
}
img {

}

p {

}
