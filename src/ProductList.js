import React , {Component} from "react";
import ShowProduct from "./ShowProduct";
class ProductList extends Component{
  render() {
    return(
      <div className="row">
        {this.props.allProduct.map(item =>{
          return (
            <>
            <ShowProduct id={item.id} title={item.title} price={item.price}/>
            </>
          )
        })}
      </div>
    )
  }
}

export default ProductList