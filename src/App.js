import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

/**
 * React路由就是根据不同的url显示不同的内容
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          {/* 使用路由 */}
          <BrowserRouter>
            <div>
              {/* exact属性就是只匹配和path完全相同的路径 */}
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
