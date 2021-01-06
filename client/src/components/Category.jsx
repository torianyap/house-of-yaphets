import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Category (props) {
  const { detail } = props
  const history = useHistory()

  return (
    <>
    <div className="category col-lg-2 col-md-4 col-sm-12 justify-content-center">
      <div className="align-self-center">
        <div className="text-center">
          <img 
            src={`${detail.image}.jpeg`} 
            alt="category" 
            className="w-75"
            onClick={() => history.push(`category/${detail.id}`) } 
          />
          <p className="mt-2">{ detail.title }</p>
        </div>
      </div>
    </div>
    </>
  )
}