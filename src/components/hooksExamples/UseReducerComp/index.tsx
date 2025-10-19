import { useReducer } from "react";

// Definimos las acciones
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Estado inicial
interface State {
  count: number;
}

const initialState: State = { count: 0 };

// Reducer: cómo cambia el estado según la acción
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="use-reducer">
      <h2 className="use-reducer__title">useReducer Hook</h2>
      <p className="use-reducer__description">
        <strong>Concepto:</strong> <br />
        <code>useReducer</code> es una alternativa a <code>useState</code> para
        manejar estados más complejos. En lugar de actualizar el estado
        directamente, se usa una función <em>reducer</em> que decide cómo
        cambiarlo según el tipo de acción que se dispare.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Pensalo como una oficina 📦: cuando querés cambiar algo del “estado”
        (por ejemplo, sumar, restar o resetear), no lo hacés vos directamente —
        en cambio, enviás una orden (<em>acción</em>) a alguien (el{" "}
        <em>reducer</em>), que sabe exactamente cómo procesarla.
        <code>useReducer</code> es muy útil cuando tu componente tiene muchas
        formas distintas de cambiar su estado, o cuando querés mantener la
        lógica más organizada, como si fuera un pequeño “controlador de
        decisiones” 🧠.
      </p>

      <div className="use-reducer__counter">
        <span className="use-reducer__count">{state.count}</span>
        <div className="use-reducer__buttons">
          <button
            className="use-reducer__button use-reducer__button--inc"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
          <button
            className="use-reducer__button use-reducer__button--dec"
            onClick={() => dispatch({ type: "decrement" })}
          >
            −
          </button>
          <button
            className="use-reducer__button use-reducer__button--reset"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
