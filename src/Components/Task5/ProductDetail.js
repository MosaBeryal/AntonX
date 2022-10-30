import React from 'react';
import Card from 'react-bootstrap/Card';
import fetchContext from './Context/fetchContext';
import { Container } from 'react-bootstrap';

function ProductDetail(props) {
    const Product=props.ProductDetail
  return (
    <div>
    {
      Product.map((ProductDetail)=>
    {
      return(
      <div>
        <h1>
         { ProductDetail.title}
        </h1>


        </div>
      )

    })
    }
        


    </div>
    
  );
}

export default ProductDetail;