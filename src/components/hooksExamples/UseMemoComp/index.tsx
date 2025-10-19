import { useMemo, useState } from "react";

export const UseMemoComp = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // Cálculo costoso simulado
  const factorial = useMemo(() => {
    console.log("Calculando factorial...");
    const calcFactorial = (n: number): number => {
      if (n <= 0) return 1;
      return n * calcFactorial(n - 1);
    };
    return calcFactorial(number);
  }, [number]);

  return (
    <div className="use-memo">
      <h2 className="use-memo__title">useMemo Hook</h2>
      <p className="use-memo__description">
        <strong>Concepto:</strong> <br />
        <code>useMemo</code> memoriza el resultado de una función o cálculo
        costoso para evitar que se vuelva a ejecutar innecesariamente en cada
        render. Solo recalcula el valor cuando cambian las dependencias
        indicadas en su arreglo.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que estás haciendo una cuenta muy pesada 🧮 (como calcular el
        factorial de un número grande). Si React ejecutara esa cuenta cada vez
        que el usuario escribe una letra o toca cualquier parte de la UI, la app
        se volvería lenta.
        <code>useMemo</code> le dice a React: “Si los datos no cambiaron, usá el
        resultado anterior”. Es como guardar el resultado de una operación en la
        memoria para no tener que recalcularlo una y otra vez. Ideal para
        cálculos grandes, filtros, o listas que se renderizan con frecuencia ⚡.
      </p>

      <div className="use-memo__input-group">
        <label className="use-memo__label">Número:</label>
        <input
          className="use-memo__input"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Ingresá un número"
        />
      </div>

      <p className="use-memo__result">Factorial: {factorial}</p>

      <div className="use-memo__text-group">
        <label className="use-memo__label">Texto:</label>
        <input
          className="use-memo__input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribí algo..."
        />
        <p className="use-memo__text">Texto ingresado: {text}</p>
      </div>
    </div>
  );
};
