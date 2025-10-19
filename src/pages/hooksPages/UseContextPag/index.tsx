import { ThemeProvider, UseContextComp } from "../../../components/hooksExamples/UseContextComp";

export const UseContextPag = () => {
  return (
    <div className="use-context-page">
      <h1 className="use-context-page__title">Ejemplo: useContext</h1>
      <div className="use-context-page__content">
        <ThemeProvider>
          <UseContextComp />
        </ThemeProvider>
      </div>
    </div>
  );
};
