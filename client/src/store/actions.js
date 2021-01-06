import axios from '../config/axios'

export function fetchCategories () {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: '/categories'
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_CATEGORIES',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_CATEGORY_LOADING',
          payload: false
        })
      })
  }
}

export function fetchProducts (filter = "") {
  let query = filter ? `CategoryId=${filter}` : ""
  
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/products?${query}`
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_PRODUCTS',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_PRODUCT_LOADING',
          payload: false
        })
      })
  }
}

export function fetchProductDetails (id) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/products/${id}`
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_DETAILS',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_DETAILS_LOADING',
          payload: false
        })
      })
  }
}

export function login (payload) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: '/login',
      data: payload
    })
      .then(({ data: { access_token, user } }) => {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('user', JSON.stringify(user))

        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: access_token
        })
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(console.log)
  }
}

export function register (payload) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: '/register',
      data: payload
    })
      .then(({ data: { access_token, user } }) => {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('user', JSON.stringify(user))

        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: access_token
        })
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(console.log)
  }
}