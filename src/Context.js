import React, { Component } from "react";

const productContext = React.createContext();
class ProductProvider extends Component {
  state = {};
  render() {
    return (
      <productContext.Provider value="Hello From Context">
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const productConsumer = productContext.Consumer;

export default { ProductProvider, productConsumer };
