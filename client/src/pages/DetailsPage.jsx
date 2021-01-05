import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPage (props) {
  const { title } = useParams()
  
  return (
    <>
    <div className="container content-container">
      {title}
    </div>
    </>
  )
}