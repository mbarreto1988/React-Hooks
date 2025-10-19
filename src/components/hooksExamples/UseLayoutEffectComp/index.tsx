import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const UseLayoutEffectComp = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [color, setColor] = useState("lightblue");

  // useLayoutEffect se ejecuta antes de pintar el componente
  useLayoutEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setBoxWidth(Math.round(width));
    }
  }, []);

  // Cambia el color con useEffect (se ejecuta después del render)
  useEffect(() => {
    const timer = setInterval(() => {
      setColor((prev) => (prev === "lightblue" ? "lightcoral" : "lightblue"));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="use-layout">
      <h2 className="use-layout__title">useLayoutEffect Hook</h2>
      <p className="use-layout__description">
        <strong>Concepto:</strong> <br />
        <code>useLayoutEffect</code> se ejecuta <strong>justo antes</strong> de
        que el navegador pinte la pantalla. Esto permite medir o modificar el
        DOM antes de que el usuario vea los cambios. Es útil cuando necesitás
        calcular posiciones, tamaños o hacer ajustes visuales precisos basados
        en el DOM.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que querés medir una caja 📦 antes de mostrarla, para asegurarte
        de que todo quede bien alineado. Si usaras <code>useEffect</code>, React
        ya habría pintado la caja, y los cálculos podrían ser un poco tardíos.
        Con <code>useLayoutEffect</code>, React te deja intervenir “entre
        bambalinas” 🎭, antes de que el usuario vea la pantalla, asegurando que
        las mediciones o ajustes de estilo se hagan a tiempo y sin parpadeos.
      </p>

      <div
        ref={boxRef}
        className="use-layout__box"
        style={{ backgroundColor: color }}
      >
        <p className="use-layout__text">Ancho medido: {boxWidth}px</p>
      </div>
    </div>
  );
};
