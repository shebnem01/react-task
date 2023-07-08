import React, { Component } from "react";
import Header from "./components/header";
import Container from "./components/home";
import Products from "./components/products";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Products />
        </Container>
        {/* <Footer /> */}
      </>
    );
  }
}
export default App;
