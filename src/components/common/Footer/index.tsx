
/**
 * 🦶 Footer
 * Pie de página simple para el proyecto de Hooks.
 * Muestra una breve firma y el año actual.
 */
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        🧩 React Hooks Playground — Desarrollado por <strong>Mati</strong> © {year}
      </p>
    </footer>
  );
};
