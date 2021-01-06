import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../store/actions"
import { Loading, ProductCard, SearchForm } from '../components'

export default function FilterPage (props) {
  const { categoryId } = useParams()
  const dispatch = useDispatch()
  const { products, product_load } = useSelector(state => state)
  
  useEffect(() => {
    dispatch(fetchProducts(categoryId))
  }, [dispatch, categoryId])

  if (product_load) return <Loading />

  return (
    <>
    <div className="container content-container">
      <SearchForm />
      <div className="row">
        <div className="col-12">
          <h3>{products[0].Category.title}</h3>
        </div>
        {
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
    </div>
    </>
  )
}