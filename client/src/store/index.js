import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  categories: [],
  products: [],
  cat_load: true,
  product_load: true,
  details: {},
  details_load: true,
  access_token: null,
  user: {}
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categories: payload }
    case "SET_PRODUCTS":
      return { ...state, products: payload }
    case "SET_CATEGORY_LOADING":
      return { ...state, loading: payload }
    case "SET_PRODUCT_LOADING": 
      return { ...state, product_load: payload }
    case "SET_DETAILS":
      return { ...state, details: payload }
    case "SET_DETAILS_LOADING":
      return { ...state, details_load: payload }
    case "SET_ACCESS_TOKEN":
      return { ...state, access_token: payload }
    case "SET_USER":
      return { ...state, user: payload }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store