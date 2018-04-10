import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Products extends Component {
   constructor() {
      super()
      this.state = {
         products: []
      }
   }

   fetchData() {
      axios.get(`/api/products/${this.props.match.params.gender}`).then( results => {
         this.setState({products: results.data})
      })
   }

   componentDidMount() {
      this.fetchData();
   }
   
   componentDidUpdate(oldProps) {
      console.log('oldProps', oldProps)
      if (oldProps.match.params.gender !== this.props.match.params.gender) {
         this.fetchData();
      }
   }

   render() {
      const products = this.state.products.map((results, i) => {
         return <Product data={results} key={i}/>
      })
      return (
        <div>
           {products}
        </div>
      )
   }
}
