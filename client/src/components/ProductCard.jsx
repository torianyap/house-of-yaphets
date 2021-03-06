import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ProductCard (props) {
  const { product } = props
  const history = useHistory()
  
  return (
    <>
      <div className="col-12 mt-2 col-md-4 col-lg-3">
      <div className="card mb-2" style={{ cursor: 'pointer', height: '22em' }} onClick={ () => history.push(`/product/${product.id}`) }>
        <img 
          src={ product.image } 
          alt="Product" 
          className="card-img-top shadow w-100" 
          style={{ objectFit: 'contain' }}
        ></img>
        <div className="card-body p-3">
          <h5 className="card-title font-weight-bold mb-1">{product.title}</h5>
          <p className="text-success font-weight-bold mb-0">
            { new Intl.NumberFormat('id', { style: 'currency', 'currency': 'IDR' }).format(product.price) }
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-block btn-sm btn-success"><span className="fas fa-shopping-cart mr-1"></span> Add to cart</button>
        </div>
      </div>
    </div>
    </>
  )
}