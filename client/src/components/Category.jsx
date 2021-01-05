import React from 'react'
import Logo from '../assets/siembokoe.jpeg'
import { useHistory } from 'react-router-dom'

export default function Category (props) {
  const { detail } = props
  const history = useHistory()

  return (
    <>
    <div className="category col-lg-2 col-md-4 col-sm-12">
      <div className="text-center">
        <img src={ Logo } alt="category" style={{ width: '100px' }} onClick={() => history.push(detail.page) } />
        <p>{ detail.title }</p>
      </div>
    </div>
    </>
  )
}