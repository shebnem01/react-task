import React, { Component } from "react";
import Product from "./product";
import productData from "../../mock/productData.json";
import Alert from "../../ui/Alert";
const limited = 3;
class Products extends Component {
  constructor() {
    super();
    this.state = {
      productCount: 0,
      showAlert: false,
    };
  }
  render() {
    const increaseProductCount = () => {
      this.setState({
        productCount:
          this.state.productCount === limited
            ? limited
            : this.state.productCount + 1,
      });

      if (this.state.productCount === limited) {
        this.setState({ showAlert: true });
      }
    };
    const decreaseProductCount = () => {
      this.setState({
        productCount:
          this.state.productCount === 0 ? 0 : this.state.productCount - 1,
      });
    };
    if (this.state.showAlert) {
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 3000);
    }
    if (this.state.productCount === limited && this.state.showAlert) {
      return (
        <Alert variant="danger">
          Bu məhsuldan maksimum 3 ədəd sifariş edə bilərsiz!
        </Alert>
      );
    }

    const productView = productData?.map((product) => (
      <Product
        increaseProductCount={increaseProductCount}
        decreaseProductCount={decreaseProductCount}
        productCount={this.state.productCount}
        product={product}
        key={product.id}
      />
    ));
    if (!productData.length) {
      return <Alert variant="danger">Məhsul tapılmadı </Alert>;
    }

    return <div className="row">{productView}</div>;
  }
}

export default Products;
