import "./static/stylesheets/app.scss";

import {AsyncComponent} from "elv-components-js";

import React from "react";
import {render} from "react-dom";
import {inject, observer, Provider} from "mobx-react";

import * as Stores from "./stores";

@inject("rootStore")
@observer
class App extends React.Component {
  Content() {
    // This function will not be called until the root store initialization has
    // completed and the client is available

    return (
      <h1>
        Ready
      </h1>
    );
  }

  render() {
    return (
      <AsyncComponent
        Load={() => this.props.rootStore.InitializeClient()}
        render={this.Content}
      />
    );
  }
}

render(
  (
    <React.Fragment>
      <Provider {...Stores}>
        <App />
      </Provider>
    </React.Fragment>
  ),
  document.getElementById("app")
);
