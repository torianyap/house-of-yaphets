import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components'
import { 
  HomePage, 
  DetailsPage,  
  FilterPage
} from './pages'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    const user = localStorage.getItem('user')
    if (access_token) {
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: access_token
      })
    }
    if (user) {
      dispatch({
        type: 'SET_USER',
        payload: JSON.parse(user)
      })
    }
  }, [dispatch])
  
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/product/:id" component={ DetailsPage } />
      <Route path="/category/:categoryId" component={ FilterPage } />
      <Route exact path="/" component={ HomePage } />
    </Switch>
    </>
  );
}

export default App;
