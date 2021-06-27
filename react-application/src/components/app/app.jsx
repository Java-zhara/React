import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "../header";
import { Main } from "../main";
import { SidePanel } from "../side-panel";
import { Todo } from "../todo";
import { Table } from "../table";
import { ThemeContext, themes } from "../theme-context";
import { Questions } from "../questions";

import "./app.css";

export const App = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const isAuth = true;

  if (!isAuth) {
    return <div>ЛОГИН</div>;
  }

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <div className="app">
        <Header />
        <div className="content">
          <SidePanel />
          <Switch>
            <Route exact path="/">
              <div>КОРЕНЬ</div>
            </Route>
            <Route path="/main">
              <div>ГЛАВНАЯ</div>
            </Route>
            <Route path="/catalogue">
              <Main store={props.store} />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="*">
              <div> 404 PAGE NOT FOUND </div>
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
