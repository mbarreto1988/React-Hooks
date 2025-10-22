import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  theme: "claro" | "oscuro";
  toggleTheme: () => void;
}

// Creamos el contexto
const ThemeContext = createContext<ThemeContextType | null>(null);

// Proveedor del contexto (envuelve a los componentes que lo usarán)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"claro" | "oscuro">("claro");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Componente que usa el contexto
export const UseContextComp = () => {
  const context = useContext(ThemeContext);

  if (!context) return <p>Error: ThemeContext no encontrado.</p>;

  const { theme, toggleTheme } = context;

  return (
    <div className="use-context">
      <h2 className="use-context__title">useContext Hook</h2>
      <p className="use-context__description">
        <strong>Concepto:</strong> <br />
        <code>useContext</code> permite acceder a datos globales (como un tema,
        idioma o usuario) sin tener que pasarlos manualmente por cada componente
        intermedio mediante props. Funciona junto con <code>createContext</code>{" "}
        y un proveedor (<code>Provider</code>) que envuelve a los componentes
        que lo usan.
        <br />
        <br />
        <strong>Explicación clara:</strong> <br />
        Imaginá que tenés una familia muy grande 👨‍👩‍👧‍👦 y querés que todos sepan
        cuál es el color del fondo de la casa. Si cada persona tuviera que
        avisarle al siguiente “che, el fondo es azul”, sería un lío. Con{" "}
        <code>useContext</code>, lo decís una sola vez y todos los componentes
        (o personas 😉) que lo necesiten pueden leerlo directamente, sin
        depender de los demás. Es ideal para temas globales como **modo
        claro/oscuro**, **idioma**, **autenticación**, etc.
      </p>

      <p className="use-context__text">
        Tema actual: <strong>{theme}</strong>
      </p>

      <button className="use-context__button" onClick={toggleTheme}>
        Cambiar a {theme === "claro" ? "oscuro" : "claro"}
      </button>
    </div>
  );
};
