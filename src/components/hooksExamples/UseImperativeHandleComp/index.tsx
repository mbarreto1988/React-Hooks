import { forwardRef, useImperativeHandle, useRef, useState } from "react";

// Definimos el tipo del handle expuesto al padre
export interface InputHandle {
  focus: () => void;
  clear: () => void;
}

// Componente hijo (usa forwardRef)
const CustomInput = forwardRef<InputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  // Exponemos funciones al padre
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => setValue("")
  }));

  return (
    <div className="use-imperative__input-wrapper">
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Escribí algo..."
        onChange={(e) => setValue(e.target.value)}
        className="use-imperative__input"
      />
      <p className="use-imperative__value">Valor: {value || "(vacío)"}</p>
    </div>
  );
});

CustomInput.displayName = "CustomInput";

// Componente principal (padre)
export const UseImperativeHandleComp = () => {
  const inputRef = useRef<InputHandle>(null);

  const focusInput = () => inputRef.current?.focus();
  const clearInput = () => inputRef.current?.clear();

  return (
    <div className="use-imperative">
      <h2 className="use-imperative__title">useImperativeHandle Hook</h2>
      <p className="use-imperative__description">
        <strong>Concepto:</strong> <br />
        <code>useImperativeHandle</code> permite que un componente hijo exponga
        funciones o métodos personalizados al componente padre a través de una
        referencia (<code>ref</code>). Se usa junto con <code>forwardRef</code>{" "}
        para que el padre pueda ejecutar acciones dentro del hijo sin tener que
        acceder directamente al DOM.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tenés un control remoto 🎮 (el padre) que quiere poder
        “hablar” con una tele 📺 (el hijo). Normalmente, el padre no puede
        meterse dentro del hijo, pero con <code>useImperativeHandle</code>, el
        hijo puede decir: “ok, te dejo usar estos botones: encender() y
        apagar()”. En este caso, el hijo expone las funciones{" "}
        <code>focus()</code> y <code>clear()</code> para que el padre pueda
        enfocar o limpiar el input sin acceder al DOM directamente.
      </p>

      <CustomInput ref={inputRef} />

      <div className="use-imperative__buttons">
        <button
          className="use-imperative__button use-imperative__button--focus"
          onClick={focusInput}
        >
          Focus al input
        </button>
        <button
          className="use-imperative__button use-imperative__button--clear"
          onClick={clearInput}
        >
          Limpiar input
        </button>
      </div>
    </div>
  );
};
