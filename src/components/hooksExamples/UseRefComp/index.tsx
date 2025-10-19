import { useRef, useState } from "react";

export const UseRefComp = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0);
  const [text, setText] = useState("");

  // Incrementa contador de renders (sin provocar re-render)
  renderCount.current++;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="use-ref">
      <h2 className="use-ref__title">useRef Hook</h2>
      <p className="use-ref__description">
        <strong>Concepto:</strong> <br />
        <code>useRef</code> crea una referencia mutable que React no vuelve a
        renderizar cuando cambia. Se usa comúnmente para acceder a elementos del
        DOM (como inputs o divs) o para guardar valores entre renders sin
        provocar una nueva renderización.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Pensá en <code>useRef</code> como una “cajita” 📦 donde podés guardar
        algo que querés recordar entre renders, pero sin que eso obligue a React
        a volver a dibujar la pantalla. Por ejemplo, podés usarlo para hacer{" "}
        <em>focus</em> a un input sin que el componente se vuelva a renderizar,
        o para llevar la cuenta de cuántas veces se dibujó el componente (como
        en este ejemplo). Es como tener una libreta de apuntes ✍️ que se
        mantiene entre renders, pero que React ignora a la hora de redibujar.
      </p>

      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="use-ref__input"
        placeholder="Escribí algo..."
      />

      <div className="use-ref__buttons">
        <button className="use-ref__button" onClick={focusInput}>
          Focus al input
        </button>
      </div>

      <p className="use-ref__info">
        Renders del componente: <strong>{renderCount.current}</strong>
      </p>
    </div>
  );
};
