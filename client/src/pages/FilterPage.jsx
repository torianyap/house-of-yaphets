import React from 'react'
import { useParams } from 'react-router-dom'

export default function FilterPage (props) {
  const { category } = useParams()
  return (
    <>
    <div className="container content-container">
      {category}
    </div>
    </>
  )
}