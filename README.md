# 🧩 React Hooks Playground

Este proyecto es una app educativa hecha en **React + TypeScript + Vite**, que muestra ejemplos prácticos de los **hooks más importantes de React**.  
Cada hook tiene su propia página con un ejemplo simple y código fácil de entender.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 18+**
- 💬 **TypeScript**
- 🎨 **SCSS / SASS** con metodología **BEM**
- 🌐 **React Router v6**
- ⚡ **Vite**

---

## 🧱 Estructura del proyecto

```
src/
├── components/
│   ├── common/               # Navbar y Footer
│   └── hooksExamples/        # Componentes demostrativos de cada hook
│
├── hooks/                    # Hooks personalizados (useOnlineStatus, etc.)
├── pages/
│   ├── Home/                 # Página de inicio con listado de hooks
│   └── hooksPages/           # Páginas que muestran cada hook en acción
│
├── routes/                   # Definición central de rutas
├── styles/                   # Variables y estilos globales
└── App.tsx                   # Entry principal de la aplicación
```

---

## 🧭 Navegación

La app cuenta con una **Navbar** en la parte superior que te permite navegar entre los distintos ejemplos de hooks.  
También incluye un **Footer** con información del autor.

---

## 🧩 Hooks incluidos

| Hook | Descripción |
|------|--------------|
| `useState` | Maneja el estado local dentro de un componente. |
| `useEffect` | Ejecuta efectos secundarios (fetch, timers, logs). |
| `useCallback` | Memoriza funciones para evitar recrearlas. |
| `useMemo` | Memoriza valores derivados de cálculos costosos. |
| `useContext` | Permite compartir datos sin pasar props. |
| `useRef` | Accede a elementos del DOM o valores persistentes. |
| `useReducer` | Maneja estados complejos con lógica basada en reducers. |
| `useTransition` | Maneja actualizaciones diferidas para mejorar la fluidez. |
| `useImperativeHandle` | Controla métodos expuestos a través de refs. |
| `useLayoutEffect` | Similar a useEffect, pero se ejecuta antes del repintado. |
| `useInsertionEffect` | Inserta estilos sincronizados con el render. |
| `useDeferredValue` | Retrasa la actualización de un valor para mejorar UX. |
| `useSyncExternalStore` | Se sincroniza con datos externos (stores, APIs). |
| `useId` | Genera IDs únicos y estables. |
| `useDebugValue` | Muestra información en React DevTools. |

---

## 🧠 Ejemplo básico — `useState`

📁 `src/components/hooksExamples/UseStateComp/index.tsx`
```tsx
import { useState } from "react";
import "./index.scss";

/**
 * 🎯 Ejemplo básico de useState
 * Incrementa o decrementa un contador con dos botones.
 */
export const UseStateComp = () => {
  const [count, setCount] = useState(0);

  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);

  return (
    <div className="use-state">
      <h2 className="use-state__title">useState Hook</h2>
      <p className="use-state__count">Count: {count}</p>
      <div className="use-state__buttons">
        <button
          className="use-state__button use-state__button--inc"
          onClick={sumar}
        >
          Incrementar
        </button>
        <button
          className="use-state__button use-state__button--dec"
          onClick={restar}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};
```

📁 `src/components/hooksExamples/UseStateComp/index.scss`
```scss
$color-bg: #f1faee;
$color-primary: #1d3557;
$color-accent: #457b9d;

.use-state {
  background: $color-bg;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  &__title {
    color: $color-primary;
    font-size: 1.5rem;
  }

  &__count {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: background 0.3s ease;

    &--inc {
      background: $color-primary;
      &:hover {
        background: darken($color-primary, 5%);
      }
    }

    &--dec {
      background: $color-accent;
      &:hover {
        background: darken($color-accent, 5%);
      }
    }
  }
}
```

---

## 🎥 Capturas y demostraciones

A continuación se muestran algunos ejemplos visuales del proyecto en funcionamiento:

| Ejemplo | Descripción | Vista previa |
|----------|--------------|---------------|
| 🧮 `useState` | Contador simple con incremento y decremento. | ![useState Demo](https://raw.githubusercontent.com/tuusuario/react-hooks-playground/main/docs/demo-usestate.gif) |
| 🌐 `useEffect` | Llamada a API para mostrar usuarios. | ![useEffect Demo](https://raw.githubusercontent.com/tuusuario/react-hooks-playground/main/docs/demo-useeffect.gif) |
| 🧠 `useMemo` | Cálculo optimizado con memoización. | ![useMemo Demo](https://raw.githubusercontent.com/tuusuario/react-hooks-playground/main/docs/demo-usememo.gif) |
| 🔄 `useCallback` | Prevención de renders innecesarios. | ![useCallback Demo](https://raw.githubusercontent.com/tuusuario/react-hooks-playground/main/docs/demo-usecallback.gif) |

> 💡 Si clonás este repo, podés grabar tus propios GIFs con **ScreenToGif**, **OBS** o **Kap**, y reemplazar los enlaces en `docs/`.

---

## 📂 Carpeta recomendada para media

Para mantener el proyecto limpio, agregá una carpeta `/docs` en la raíz:

```
docs/
├── demo-usestate.gif
├── demo-useeffect.gif
├── demo-usememo.gif
└── demo-usecallback.gif
```

Estos archivos se referencian directamente en el README.

---

## 🖥️ Cómo correr el proyecto

1. Cloná el repositorio  
   ```bash
   git clone https://github.com/tuusuario/react-hooks-playground.git
   ```

2. Instalá dependencias  
   ```bash
   npm install
   ```

3. Corré el proyecto  
   ```bash
   npm run dev
   ```

4. Abrí en el navegador  
   ```
   http://localhost:5173
   ```

---

## 🧑‍💻 Autor

Desarrollado por **Mati**, con fines educativos para practicar y entender cómo funcionan los **React Hooks** de forma simple, clara y visual.  

---

> 💡 Consejo: si querés agregar más hooks, solo duplicá una página existente dentro de `src/pages/hooksPages` y ajustá el contenido según el hook nuevo.

---

| Prioridad | Hook                   | ⭐ Popular | Descripción breve                                                 |
| --------- | ---------------------- | --------- | ----------------------------------------------------------------- |
| 1️⃣       | `useState`             | ★         | Maneja el **estado local** de un componente.                      |
| 2️⃣       | `useEffect`            | ★         | Ejecuta **efectos secundarios** (APIs, timers, etc).              |
| 3️⃣       | `useContext`           | ★         | Comparte **datos globales** sin pasar props manualmente.          |
| 4️⃣       | `useRef`               | ★         | Permite **referenciar el DOM** o valores persistentes.            |
| 5️⃣       | `useMemo`              | ★         | Memoriza **resultados de cálculos costosos**.                     |
| 6️⃣       | `useCallback`          | ★         | Memoriza **funciones** para evitar renders innecesarios.          |
| 7️⃣       | `useReducer`           |           | Maneja **estados complejos** con un reducer (tipo Redux).         |
| 8️⃣       | `useLayoutEffect`      |           | Corre **antes del render visual** para medir o ajustar el DOM.    |
| 9️⃣       | `useTransition`        |           | **Difiere actualizaciones pesadas**, manteniendo la UI fluida.    |
| 🔟        | `useDeferredValue`     |           | Retrasa valores para **no trabar la interfaz**.                   |
| 11️⃣      | `useImperativeHandle`  |           | Expone **métodos personalizados** desde un hijo a un padre.       |
| 12️⃣      | `useSyncExternalStore` |           | Sincroniza datos con **fuentes externas** (stores, sockets, etc). |
| 13️⃣      | `useInsertionEffect`   |           | Inserta **estilos CSS** antes del renderizado.                    |
| 14️⃣      | `useId`                |           | Genera **IDs únicos y estables** (ideal para formularios).        |
| 15️⃣      | `useDebugValue`        |           | Muestra **valores de custom hooks** en las DevTools.              |


## 💡 Resumen general:

1. 🧩 Básicos y más usados: useState, useEffect, useContext, useRef
2. ⚙️ Optimización y performance: useMemo, useCallback, useTransition, useDeferredValue
3. 🧠 Avanzados / específicos: useImperativeHandle, useSyncExternalStore, useInsertionEffect, useDebugValue

---
### 🏆 Hooks más usados (básicos y esenciales)
1. ★ useState → manejo de estado local.
2. ★ useEffect → efectos secundarios (API, timers, etc).
3. ★ useContext → compartir datos globales sin props.
4. ★ useRef → acceder al DOM o valores persistentes.
5. ★ useMemo → memorizar valores costosos.
6. ★ useCallback → memorizar funciones.

### ⚙️ Hooks intermedios / menos comunes
7. useReducer → estados complejos (como un mini Redux).
8. useLayoutEffect → medir/ajustar el DOM antes del render.
9. useTransition → diferir actualizaciones pesadas.
10. useDeferredValue → retrasar valores para evitar bloqueos.

### 🧩 Hooks avanzados / más específicos
11. useImperativeHandle → exponer métodos desde un componente hijo.
12. useSyncExternalStore → sincronizar con stores externos.
13. useInsertionEffect → insertar estilos antes del render.
14. useId → generar IDs únicos y estables.
15. useDebugValue → mostrar info en DevTools (para custom hooks).

### 🧩 Hooks avanzados / más específicos
- useImperativeHandle → exponer métodos desde un componente hijo.
- useSyncExternalStore → sincronizar con stores externos.
- useInsertionEffect → insertar estilos antes del render.
- useId → generar IDs únicos y estables.
- useDebugValue → mostrar info en DevTools (para custom hooks).#   R e a c t - H o o k s  
 