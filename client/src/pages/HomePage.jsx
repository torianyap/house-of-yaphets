import React, { useEffect, useState } from 'react'
import { Category, ProductCard } from '../components'
import axios from 'axios'

export default function HomePage (props) {
  const [products, setProducts] = useState([])
  const categories = [
    {
      title: 'Siembokoe',
      image: '',
      page: '/sbk'
    },
    {
      title: 'Porky Up',
      image: '',
      page: '/porky'
    },
    {
      title: 'SBK Supplies',
      image: '',
      page: '/sbk-supplies'
    }
  ]

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:4000/products'
    })
      .then(({ data }) => {
        setProducts(data)
      })
      .catch(console.log())
  }, [])

  return (
    <>
    <div className="container" style={{ marginTop: '8em' }}>
      <div>
        <div className="row mb-4">
          <div className="col-12">
            <form className="search-form">
              <div className="d-flex align-items-center" role="button">
                <span className="fas fa-search mr-2" style={{ fontSize: '20px' }}></span>
                <input type="text" name="search" id="search" className="form-control" placeholder="Search Here"/>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 m-2">
            <h3>Categories</h3>
          </div>
          {
            categories.map(detail => (
              <Category detail={detail} key={detail.title}/>
            ))
          }
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <h3>All Products</h3>
          </div>
          {
            products.map(product => (
              <ProductCard product={product} key={product.id} />
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

