import { useId, useState } from "react";

export const UseIdComp = () => {
  const idName = useId();
  const idEmail = useId();
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="use-id">
      <h2 className="use-id__title">useId Hook</h2>
      <p className="use-id__description">
        <strong>Concepto:</strong> <br />
        <code>useId</code> genera identificadores únicos y estables entre
        renders. Es ideal para elementos que necesitan un <code>id</code> único,
        como inputs en formularios, o para mejorar la accesibilidad (por
        ejemplo, vincular etiquetas <code>&lt;label&gt;</code> con sus{" "}
        <code>&lt;input&gt;</code>). Cada componente obtiene sus propios IDs que
        se mantienen iguales aunque React vuelva a renderizarlo.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que estás armando un formulario y necesitás que cada campo tenga
        su propio identificador, para que el navegador y las herramientas de
        accesibilidad sepan cuál label corresponde a cuál input 🧩. Si React
        creara IDs nuevos en cada render, los vínculos se romperían. Con{" "}
        <code>useId</code>, cada campo recibe un ID único y consistente,
        asegurando que la app siga siendo accesible, ordenada y fácil de
        mantener 💡.
      </p>

      <form className="use-id__form">
        <div className="use-id__group">
          <label htmlFor={idName} className="use-id__label">
            Nombre:
          </label>
          <input
            id={idName}
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="use-id__input"
          />
        </div>

        <div className="use-id__group">
          <label htmlFor={idEmail} className="use-id__label">
            Email:
          </label>
          <input
            id={idEmail}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="use-id__input"
          />
        </div>

        <button
          type="button"
          className="use-id__button"
          onClick={() => alert(JSON.stringify(form, null, 2))}
        >
          Enviar
        </button>
      </form>

      <div className="use-id__info">
        <p>
          <strong>ID nombre:</strong> {idName}
        </p>
        <p>
          <strong>ID email:</strong> {idEmail}
        </p>
      </div>
    </div>
  );
};
