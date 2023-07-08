import React, { Component } from "react";
import PropTypes, { object } from "prop-types";
import Button from "../../../ui/Button";
import styles from "./product.module.css";
class Product extends Component {
  static defaultProps = {
    product: {},
  };


  render() {
    const { title, price, img } = this.props.product;
    
      return (
        <div className="col-3 my-5">
          <div className="card p-3 text-center">
            <img  src={img} className={styles["card-img-top"]}  alt={title} />
            <div className="card-body">
              <h5 className="card-title text-primary">{title}</h5>
            </div>
  
            <div className="card-body bg-light">$ {price}</div>
            <div className={styles.count}>
              {/* Butona onclick verende işləmədi */}
              <Button>
                <span onClick={this.props.decreaseProductCount}>-</span>
              </Button>
              <Button bg="primary">{this.props.productCount}</Button>
              <Button bg="success">
                <span onClick={this.props.increaseProductCount}>+</span>
              </Button>
            </div>
          </div>
        </div>
      );
    
  
  }
}
export default Product;

Product.propTypes = {

  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
  }),
  decreaseProductCount:PropTypes.func,
  increaseProductCount:PropTypes.func,
  productCount:PropTypes.number,

};
