import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductCard } from '../components'

export default function SiembokoePage (props) {
  const [dummy, setDummy] = useState([])
  
  useEffect(() => {
    axios({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'GET'
    })
      .then(({ data }) => {
        const tenth = data.slice(0, 9)
        setDummy(tenth)
      })
      .catch(console.log)
  }, [])

  return (
    <>
    <div className="container content-container">
      <h1 className="text-center mb-3">SiemBoKoe Products</h1>
      <div className="row">
        {
          dummy.map(photo => (
            <ProductCard product={photo} key={photo.id} />
          ))
        }
      </div>
    </div>
    </>
  )
}