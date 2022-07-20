import * as React from "react";
import Menu from "../menu/Menu";
import About from "../discription/Discription";
import "./Main.css";
import ErrorBoundary from "./../../ErrorBoundary";
import { Routes, Route } from "react-router-dom";
// import Remote from "RemoteTwo/App";

const RemoteApp = React.lazy(() => import("Remote/Info").then(module => module));
const AppC = React.lazy(() => import("appC/App").then(module => module));

// const RemoteApp = React.lazy(() => import("Remote/Info"));
// const AppC = React.lazy(() => import("appC/App"));

//еслиудалённый модуль упал - приложение продолжит работать
const RemoteWrapper = ({ children }) => (
  <div>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const Main = () => {
  return (
    <div className="main">
      <Menu />
      <div className="main__remote-app-wrapper">
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="app_one"
            element={
              <RemoteWrapper>
                <React.Suspense fallback={'Идёт загрузка приложения ...'}>
                   <RemoteApp />
                </React.Suspense>
              </RemoteWrapper>
            }
          />
          <Route
            path="app_two"
            element={
              <RemoteWrapper>
                <React.Suspense fallback={'Идёт загрузка приложения ...'}>
                   <AppC/>
                </React.Suspense>
              </RemoteWrapper>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
