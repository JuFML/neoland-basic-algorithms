# Button Hover

**Introducción**

---

En este ejercicio tendremos que usar una transición que modifique la escala del botón cuando hacemos hover sobre él.

**Autoevaluación**

---

- El botón tiene que aumentar su escala un 1.2.
- La transición dura 0.3 segundos.
- La transición va tanto en un sentido como en otro, disminuyendo su escala al dejar de hacer hover.

Html code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Hover</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="transition-container">
      <button>Animación 🪄</button>
    </div>
  </body>
</html>

**Css code**

---

```css
#transition-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

button {
  border-radius: 8px;
  border: none;
  background-color: #2563eb;
  color: white;
  font-size: 18px;
  padding: 16px 24px;
  text-align: center;
}
```
