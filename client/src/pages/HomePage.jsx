import React, { useEffect } from 'react'
import { Category, Loading, ProductCard, SearchForm } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchProducts } from "../store/actions"

export default function HomePage (props) {
  const dispatch = useDispatch()
  const { categories, products, product_load } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])

  if (product_load) return <Loading/>

  return (
    <>
    <div className="container" style={{ marginTop: '8em' }}>
      <div>
        <SearchForm />
        <div className="row mb-2">
          <div className="col-12 m-2">
            <h3><b>Categories</b></h3>
          </div>
          {
            categories.map(detail => (
              <Category detail={detail} key={detail.title}/>
            ))
          }
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <h3><b>All Products</b></h3>
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

