import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export const UseEffectComp = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Llamada a API al montar el componente
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los datos:", err);
        setLoading(false);
      });
  }, []); // [] => solo se ejecuta una vez (cuando se monta el componente)

  return (
    <div className="use-effect">
      <h2 className="use-effect__title">useEffect Hook</h2>
      <p className="use-effect__description">
        <strong>Concepto:</strong> <br />
        <code>useEffect</code> es un hook que permite ejecutar{" "}
        <em>efectos secundarios</em> en los componentes de React. Esto incluye
        tareas como llamadas a APIs, manejo de eventos, timers o interacciones
        con el DOM. Por defecto, se ejecuta después de cada render, aunque se
        puede controlar su comportamiento con el arreglo de dependencias.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Pensá en <code>useEffect</code> como una “tarea automática” que se
        ejecuta cuando tu componente se muestra o cambia. Por ejemplo: cuando
        abrís una página, React puede usar <code>useEffect</code> para ir a
        buscar datos a una API, o para configurar un reloj que actualice la hora
        cada segundo. Es como decirle a React: “Che, cuando termines de mostrar
        esto, hacé tal cosa”. Y si querés que lo haga solo una vez (como al
        montar), le pasás <code>[]</code> como dependencias 🧠.
      </p>

      {loading ? (
        <p className="use-effect__loading">Cargando usuarios...</p>
      ) : (
        <ul className="use-effect__list">
          {users.map((user) => (
            <li key={user.id} className="use-effect__item">
              <h3 className="use-effect__name">{user.name}</h3>
              <p className="use-effect__email">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
