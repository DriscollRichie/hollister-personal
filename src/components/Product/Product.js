import React, { Component } from 'react'

export default class Product extends Component {
   render() {
      return (
         <div className="Product-container">
            <span>{ this.props.data.name }</span>
            <span>${ this.props.data.price }</span>
            <img src={this.props.data.img} alt='Product visual' width="200px" />
         </div>
      )
   }
}