import { useDeferredValue, useState, useMemo } from "react";

export const UseDeferredValueComp = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input); // versión "diferida" del input

  // Simulamos una operación pesada (render de muchos ítems)
  const list = useMemo(() => {
    const size = 12000;
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push(`${deferredInput} - elemento ${i + 1}`);
    }
    return result;
  }, [deferredInput]);

  return (
    <div className="use-deferred">
      <h2 className="use-deferred__title">useDeferredValue Hook</h2>
      <p className="use-deferred__description">
        <strong>Concepto:</strong> <br />
        <code>useDeferredValue</code> crea una versión “diferida” de un valor,
        lo que le da tiempo a React para mantener la interfaz fluida cuando se
        realizan operaciones o renders muy costosos. Es decir, mientras el
        usuario escribe o interactúa, React puede postergar el render pesado
        hasta que la UI esté lista para actualizarse.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que estás escribiendo en un buscador con una lista gigante de
        resultados 🔍. Si React tuviera que actualizar todos los miles de
        elementos cada vez que apretás una tecla, la app se trabaría enseguida.
        <code>useDeferredValue</code> hace que React “espere un poquito” antes
        de procesar esos renders grandes, priorizando que el usuario siga
        escribiendo sin lag. Así, la UI se siente liviana y rápida aunque haya
        procesos pesados corriendo en segundo plano ⚡.
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribí algo..."
        className="use-deferred__input"
      />

      <p className="use-deferred__info">
        Valor inmediato: <strong>{input}</strong> | Valor diferido:{" "}
        <strong>{deferredInput}</strong>
      </p>

      <ul className="use-deferred__list">
        {list.slice(0, 100).map((item, i) => (
          <li key={i} className="use-deferred__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
