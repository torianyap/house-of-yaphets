import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components'
import { 
  HomePage, 
  DetailsPage,  
  FilterPage
} from './pages'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/product/:title" component={ DetailsPage } />
      <Route path="/:category" component={ FilterPage } />
      <Route exact path="/" component={ HomePage } />
    </Switch>
    </>
  );
}

export default App;
