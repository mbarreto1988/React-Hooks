import { useState, useTransition } from "react";

export const UseTransitionComp = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 15000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Actualiza la lista en segundo plano
    startTransition(() => {
      const newList = Array.from(
        { length: LIST_SIZE },
        (_, i) => `${value} - ${i}`
      );
      setList(newList);
    });
  };

  return (
    <div className="use-transition">
      <h2 className="use-transition__title">useTransition Hook</h2>
      <p className="use-transition__description">
        <strong>Concepto:</strong> <br />
        <code>useTransition</code> permite marcar ciertas actualizaciones de
        estado como “no urgentes”. Esto le dice a React que puede postergar esas
        actualizaciones para mantener la interfaz rápida y fluida, priorizando
        las interacciones más importantes del usuario (como escribir en un input
        o hacer clic).
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tenés que escribir algo mientras alguien ordena una lista
        gigante 📜. Si React actualizara todo al mismo tiempo, la app se
        sentiría lenta o trabada. Con <code>useTransition</code>, React separa
        las tareas: primero actualiza lo importante (mostrar lo que escribís) y
        después, cuando hay tiempo libre, se encarga de las tareas pesadas
        (generar la lista). Es como decirle a React: “Tranquilo, esto puede
        esperar 😌”. Así la interfaz se mantiene siempre fluida y sin bloqueos.
      </p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Escribí algo..."
        className="use-transition__input"
      />

      {isPending ? (
        <p className="use-transition__loading">Cargando resultados...</p>
      ) : (
        <ul className="use-transition__list">
          {list.slice(0, 50).map((item, i) => (
            <li key={i} className="use-transition__item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
