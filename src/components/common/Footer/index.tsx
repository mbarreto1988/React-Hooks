
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
