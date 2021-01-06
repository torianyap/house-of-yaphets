import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loading, SearchForm } from '../components'
import { fetchProductDetails } from '../store/actions'

export default function DetailsPage (props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { details, details_load } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchProductDetails(id))
  }, [dispatch, id])

  if (details_load) return <Loading />

  return (
    <>
    <div className="container content-container">
      <div>
        <SearchForm />
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 d-flex">
              <Link to="/" style={{ color: 'black' }}>Shop {'>'}</Link>
              <p className="ml-1 text-success" style={{ textTransform: 'capitalize', cursor: 'pointer' }}>{details.title}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={details.image} alt="product" className="w-100 img-thumbnail"/>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-column">
                <h2>{details.title}</h2>
                <p className="text-success font-weight-bold" style={{ fontSize: '20px' }}>
                  { new Intl.NumberFormat('id', { style: 'currency', 'currency': 'IDR' }).format(details.price) }
                </p>
                <button className="btn btn-success w-25 mt-2">Add To Cart</button>
              </div>
              <div className="wrapper center-block mt-4">
                <div className="accordion" id="myAccordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button 
                          className="btn btn-link btn-block text-left" 
                          type="button" 
                          data-toggle="collapse" 
                          data-target="#collapseOne" 
                          style={{ color:"black", fontWeight: 'bold' }} 
                          aria-expanded="true" 
                          aria-controls="collapseOne"
                        >Product Information</button>
                      </h2>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#myAccordion">
                      <div className="card-body">
                        {details.content_info}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button 
                          className="btn btn-link btn-block text-left"
                          style={{ color:"black", fontWeight: 'bold' }} 
                          type="button" 
                          data-toggle="collapse" 
                          data-target="#collapseTwo" 
                          aria-expanded="true" 
                          aria-controls="collapseTwo"
                        >Nutritions</button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#myAccordion">
                      <div className="card-body">
                        {details.content_nutrition}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button 
                          className="btn btn-link btn-block text-left" 
                          type="button" 
                          data-toggle="collapse" 
                          data-target="#collapseThree" 
                          style={{ color:"black", fontWeight: 'bold' }} 
                          aria-expanded="true" 
                          aria-controls="collapseThree"
                        >Cara Penyimpanan</button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#myAccordion">
                      <div className="card-body">
                        {details.content_steps}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}