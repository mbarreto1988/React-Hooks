import { useOnlineStatus } from "../../../hooks/useOnlineStatus";

export const UseDebugValueComp = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="use-debug">
      <h2 className="use-debug__title">useDebugValue Hook</h2>
      <p className="use-debug__description">
        <strong>Concepto:</strong> <br />
        <code>useDebugValue</code> se usa dentro de **custom hooks** para
        mostrar información útil en las <strong>React DevTools</strong>. No
        cambia lo que se ve en la interfaz, sino que ayuda a los desarrolladores
        a entender qué valor tiene internamente un hook personalizado.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que estás trabajando con un hook personalizado, por ejemplo uno
        que te dice si estás conectado a Internet o no. En la pantalla solo
        mostrás “Conectado” o “Sin conexión”, pero en las herramientas de
        desarrollo podés querer ver un valor más técnico o informativo, como
        “isOnline: true”. Con <code>useDebugValue</code> podés dejar una “nota”
        o etiqueta visible solo en las DevTools, que te ayuda a depurar sin
        ensuciar la UI 🎯.
      </p>

      <div
        className={`use-debug__status ${
          isOnline ? "use-debug__status--online" : "use-debug__status--offline"
        }`}
      >
        {isOnline ? "🟢 Conectado a Internet" : "🔴 Sin conexión"}
      </div>

      <p className="use-debug__note">
        Abrí las DevTools de React para ver el valor mostrado por{" "}
        <code>useDebugValue</code>.
      </p>
    </div>
  );
};
