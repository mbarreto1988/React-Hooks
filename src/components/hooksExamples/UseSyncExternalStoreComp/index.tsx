import { useSyncExternalStore } from "react";

// 🔹 Creamos un store simple con suscriptores
let currentTime = new Date().toLocaleTimeString();
const listeners = new Set<() => void>();

// Funciones del "store"
function subscribe(callback: () => void) {
  listeners.add(callback);
  const interval = setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
    listeners.forEach((listener) => listener());
  }, 1000);

  return () => {
    clearInterval(interval);
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return currentTime;
}

export const UseSyncExternalStoreComp = () => {
  // Se suscribe al store externo
  const time = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div className="use-sync">
      <h2 className="use-sync__title">useSyncExternalStore Hook</h2>
      <p className="use-sync__description">
        <strong>Concepto:</strong> <br />
        <code>useSyncExternalStore</code> es un hook diseñado para mantener un
        componente sincronizado con una fuente de datos externa (como un store,
        API, o incluso un reloj). React se encarga de escuchar los cambios en
        esa fuente y volver a renderizar el componente cuando el valor cambia.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tenés un “reloj externo” ⏰ que va marcando la hora cada
        segundo, y querés que tu componente muestre esa hora actualizada sin que
        vos tengas que hacerlo manualmente.
        <code>useSyncExternalStore</code> se encarga justamente de eso: se
        suscribe a los cambios del reloj (u otra fuente externa) y actualiza la
        interfaz automáticamente cada vez que hay una modificación. Es muy útil
        cuando querés conectar tu componente a algo que vive fuera de React (por
        ejemplo: un store global, WebSocket, API o sistema externo).
      </p>

      <div className="use-sync__clock">
        🕒 <span className="use-sync__time">{time}</span>
      </div>

      <p className="use-sync__note">
        Este tiempo se actualiza directamente desde un store externo cada
        segundo.
      </p>
    </div>
  );
};
