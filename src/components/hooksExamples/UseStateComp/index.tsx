import { useState } from "react";

/**
 * 🧠 useState
 * Es el hook básico para manejar el estado en componentes funcionales.
 * Permite guardar y actualizar valores (números, strings, objetos, etc.)
 * y hace que el componente se re-renderice cuando el valor cambia.
 */

export const UseStateComp = () => {
  const [count, setCount] = useState(0);

  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);

  return (
    <div className="use-state">
      <h2 className="use-state__title">useState Hook</h2>
      <p className="use-state__description">
        <strong>Concepto:</strong> <br />
        <code>useState</code> es el hook más básico de React. Permite crear y
        manejar un estado interno dentro de un componente funcional. Cada vez
        que el valor del estado cambia, React vuelve a renderizar el componente
        para mostrar la nueva información.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tu componente tiene una “cajita” 🧰 donde guarda datos (por
        ejemplo, un número o un texto).
        <code>useState</code> te da acceso a esa cajita y una forma de
        actualizar su contenido. En este ejemplo, el número del contador está
        dentro de esa cajita. Cada vez que tocás “Incrementar” o “Decrementar”,
        React cambia el valor y vuelve a dibujar la pantalla para mostrar el
        nuevo número 🔢. Es la base para crear componentes interactivos que
        reaccionan a las acciones del usuario.
      </p>

      <p className="use-state__count">Count: {count}</p>
      <div className="use-state__buttons">
        <button
          className="use-state__button use-state__button--inc"
          onClick={sumar}
        >
          Incrementar
        </button>
        <button
          className="use-state__button use-state__button--dec"
          onClick={restar}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};
