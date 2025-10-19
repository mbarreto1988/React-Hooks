import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import "./styles/App.scss";

/**
 * 🌐 App
 * Contenedor principal: renderiza Navbar, Rutas y Footer.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="app__content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
