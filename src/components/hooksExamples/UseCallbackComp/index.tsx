import { useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const MemoButton = ({ onClick, label }: ButtonProps) => {
  console.log(`Render: ${label}`);
  return (
    <button className="use-callback__button" onClick={onClick}>
      {label}
    </button>
  );
};

export const UseCallbackComp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  console.log("Render del componente principal");

  return (
    <div className="use-callback">
      <h2 className="use-callback__title">useCallback Hook</h2>
      <p className="use-callback__description">
        <strong>Concepto:</strong> <br />
        <code>useCallback</code> es un hook que memoriza funciones para que no
        se vuelvan a crear en cada render, a menos que cambien las dependencias
        que le pasás. Esto ayuda a optimizar el rendimiento, especialmente
        cuando pasás funciones a componentes hijos.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tenés una fábrica y cada vez que querés apretar un botón, en
        vez de usar el mismo botón, construís uno nuevo. Eso sería ineficiente,
        ¿no? 🏗️ Bueno, <code>useCallback</code> hace que React recuerde
        ("memorice") ese botón —o en este caso, esa función— para no tener que
        reconstruirla todo el tiempo. Así, tus componentes hijos no se
        renderizan de más y la app anda más fluida ⚡.
      </p>

      <div className="use-callback__counter">
        <span className="use-callback__count">Contador: {count}</span>
        <div className="use-callback__buttons">
          <MemoButton onClick={handleIncrement} label="Sumar" />
          <MemoButton onClick={handleDecrement} label="Restar" />
        </div>
      </div>

      <input
        className="use-callback__input"
        type="text"
        placeholder="Escribí algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="use-callback__text">Texto: {text}</p>
    </div>
  );
};
