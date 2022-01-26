import React , {Component} from "react";

class ShowProduct extends Component{
  render() {

    return(
      <div className="show-peoduct">
        <h1 className="name">Name: <span>{this.props.title}</span></h1>
        <p className="price"> price:<span>{this.props.price}</span></p>
        <span className="id">{this.props.id}</span>
      </div>
    )
  }
}

export default ShowProduct