import React from 'react'

export default function ProductCard (props) {
  const { product } = props
  return (
    <>
      <div className="col-4 my-2" key={product.id}>
      <div className="card">
        <img src={ product.thumbnailUrl } alt="#"  className="card-img-top"></img>
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
        </div>
        <div className="card-footer">
          <button className="btn btn-block btn-sm btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
    </>
  )
}