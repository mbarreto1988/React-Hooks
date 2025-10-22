
// Muestra una descripción general de los hooks disponibles y cómo se pueden probar.

export const HomePag = () => {
  const hooks = [
    { name: "useState", desc: "Maneja el estado local dentro de un componente." },
    { name: "useEffect", desc: "Permite ejecutar efectos secundarios como llamadas a APIs o timers." },
    { name: "useCallback", desc: "Memoriza funciones para evitar recrearlas en cada render." },
    { name: "useMemo", desc: "Memoriza valores calculados para optimizar el rendimiento." },
    { name: "useContext", desc: "Comparte datos entre componentes sin pasar props." },
    { name: "useRef", desc: "Accede a elementos del DOM o valores persistentes sin re-renderizar." },
    { name: "useReducer", desc: "Maneja estados complejos con una lógica de tipo reducer." },
    { name: "useTransition", desc: "Permite manejar actualizaciones de estado de manera diferida." },
    { name: "useImperativeHandle", desc: "Expone funciones personalizadas desde componentes con ref." },
    { name: "useLayoutEffect", desc: "Similar a useEffect, pero se ejecuta antes del repintado del navegador." },
    { name: "useInsertionEffect", desc: "Permite insertar estilos CSS sincronizados con el render." },
    { name: "useDeferredValue", desc: "Retrasa la actualización de un valor para mantener la fluidez." },
    { name: "useSyncExternalStore", desc: "Permite sincronizarse con fuentes de datos externas." },
    { name: "useId", desc: "Genera IDs únicos y estables entre renders." },
    { name: "useDebugValue", desc: "Muestra información personalizada en React DevTools." },
  ];

  return (
    <div className="home">
      <h1 className="home__title">React Hooks Playground 🧩</h1>
      <p className="home__intro">
        Esta aplicación te permite explorar los <strong>hooks más importantes de React</strong>.
        Cada uno tiene su propia página con un ejemplo práctico y código listo para probar.
      </p>

      <h2 className="home__subtitle">📘 Hooks disponibles</h2>

      <ul className="home__list">
        {hooks.map((hook) => (
          <li key={hook.name} className="home__item">
            <strong className="home__name">{hook.name}</strong>
            <span className="home__desc">{hook.desc}</span>
          </li>
        ))}
      </ul>

      <p className="home__footer">
        🔗 Usá el menú superior para navegar entre los ejemplos y ver cómo funciona cada hook.
      </p>
    </div>
  );
};
