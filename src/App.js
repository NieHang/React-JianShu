import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login';
import Write from './pages/write';
import store from "./store";

/**
 * React路由就是根据不同的url显示不同的内容
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* 使用路由 */}
        <BrowserRouter>
          <div>
            {/* exact属性就是只匹配和path完全相同的路径 */}
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
