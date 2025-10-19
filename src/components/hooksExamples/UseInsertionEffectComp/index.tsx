import { useInsertionEffect, useLayoutEffect, useState } from "react";

export const UseInsertionEffectComp = () => {
  const [color, setColor] = useState("skyblue");

  // 🔹 Se ejecuta ANTES de useLayoutEffect (ideal para inyectar estilos)
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        transition: background-color 0.3s ease-in-out;
        background-color: ${color}33; /* color con transparencia */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  // 🔹 useLayoutEffect: mide después del DOM renderizado
  useLayoutEffect(() => {
    console.log("useLayoutEffect ejecutado: DOM listo con color", color);
  }, [color]);

  return (
    <div className="use-insertion">
      <h2 className="use-insertion__title">useInsertionEffect Hook</h2>
      <p className="use-insertion__description">
        <strong>Concepto:</strong> <br />
        <code>useInsertionEffect</code> se ejecuta <strong>antes</strong> de{" "}
        <code>useLayoutEffect</code> y <code>useEffect</code>. Está pensado para
        insertar o modificar <em>estilos CSS</em> de forma sincrónica con el
        renderizado, asegurando que los estilos estén aplicados antes de que el
        navegador pinte la pantalla. Es ideal para librerías de estilos o
        situaciones donde querés cambiar el aspecto visual justo antes del
        render final.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que estás pintando una pared 🎨 y querés cambiar el color justo
        antes de que alguien entre a la habitación. Si esperás al final (como
        haría <code>useEffect</code>), la persona va a ver el cambio en vivo.
        Pero si lo hacés justo antes de abrir la puerta, ya verá todo pintado
        perfecto. Eso hace <code>useInsertionEffect</code>: le da a React un
        “momento previo” para aplicar estilos o cambios visuales, evitando
        parpadeos o renders intermedios. Se usa sobre todo en sistemas que
        generan CSS dinámico, como <strong>styled-components</strong> o{" "}
        <strong>emotion</strong> 🧵.
      </p>

      <div className="use-insertion__buttons">
        <button
          className="use-insertion__button use-insertion__button--blue"
          onClick={() => setColor("skyblue")}
        >
          Azul
        </button>
        <button
          className="use-insertion__button use-insertion__button--green"
          onClick={() => setColor("lightgreen")}
        >
          Verde
        </button>
        <button
          className="use-insertion__button use-insertion__button--pink"
          onClick={() => setColor("lightpink")}
        >
          Rosa
        </button>
      </div>

      <div className="use-insertion__box" style={{ backgroundColor: color }}>
        <p className="use-insertion__text">
          Fondo del body cambia antes del render final.
        </p>
      </div>
    </div>
  );
};
