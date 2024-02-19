import { useState } from "react";
import "./App.css";

// Ha llegado el momento de ponerse a trabajar con ReactJS, para ello os proponemos una pequeña práctica que os ayude afianzar el funcionamiento de `JSX`.

// 1. Crea una aplicación de ReactJS con vite → name: jsx-basics.
// 2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
// 3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como `key={index}` .
// 4. Mappea un array de objetos para pintarlos.
// 5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique.

function App() {
  const [renderiza, setRenderiza] = useState(true);
  const x = 12;
  const personas = ["Juliana", "Clara", "Nacho", "Natalia"];

  const handleClick = () => setRenderiza(!renderiza);

  return (
    <>
      {x >= 6 && x <= 12 ? (
        <p>Buenos días</p>
      ) : x >= 13 && x <= 19 ? (
        <p>Buenos tardes</p>
      ) : (
        <p>Buenas noches</p>
      )}

      {personas.map((persona, index) => (
        <p key={index}>{persona}</p>
      ))}

      {renderiza ? (
        <p>
          El valor de renderiza es <strong>true</strong>
        </p>
      ) : (
        <p>
          El valor de renderiza es <strong>false</strong>
        </p>
      )}
      <button onClick={() => handleClick()}>CAMBIAR FRASE</button>
    </>
  );
}

export default App;
