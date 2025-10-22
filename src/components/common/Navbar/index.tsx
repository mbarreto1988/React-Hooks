import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/usestate", label: "useState" },
    { path: "/useeffect", label: "useEffect" },
    { path: "/usecallback", label: "useCallback" },
    { path: "/usememo", label: "useMemo" },
    { path: "/usecontext", label: "useContext" },
    { path: "/useref", label: "useRef" },
    { path: "/usereducer", label: "useReducer" },
    { path: "/usetransition", label: "useTransition" },
    { path: "/useimperativehandle", label: "useImperativeHandle" },
    { path: "/uselayouteffect", label: "useLayoutEffect" },
    { path: "/useinsertioneffect", label: "useInsertionEffect" },
    { path: "/usedeferredvalue", label: "useDeferredValue" },
    { path: "/usesyncexternalstore", label: "useSyncExternalStore" },
    { path: "/useid", label: "useId" },
    { path: "/usedebugvalue", label: "useDebugValue" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map((link) => (
          <li
            key={link.path}
            className={`navbar__item ${
              location.pathname === link.path ? "navbar__item--active" : ""
            }`}
          >
            <Link to={link.path} className="navbar__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
