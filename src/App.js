import React , {Component} from "react";
import ProductList from "./ProductList";
class App extends Component {
  constructor(){
    super();
    this.state = {
      product:[
        {
          id: 1,
          title: "product One",
          price:3000
        },
        {
          id: 2,
          title: "product Two",
          price:2000
        },
        {
          id: 3,
          title: "product Three",
          price:5000
        }
      ]
    }
  }
  render() {
    return(
      <>
      <ProductList allProduct ={this.state.product}/>
      </>
    )
  }
}

export default App;
