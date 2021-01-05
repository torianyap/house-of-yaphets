import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components'
import { 
  HomePage, 
  SiemBoKoe, 
  SBK_Supplies_Page, 
  ZihqerenPage,
  BatikPage,
  PropolaPage,
  DetailsPage,  
} from './pages'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/product/:title" component={ DetailsPage } />
      <Route path="/zihqeren" component={ZihqerenPage} />
      <Route path="/propola" component={ PropolaPage } />
      <Route path="/batik-nuswantoro" component={BatikPage} />
      <Route path="/sbk-supplies" component={ SBK_Supplies_Page } />
      <Route path="/sbk" component={ SiemBoKoe } />
      <Route exact path="/" component={ HomePage } />
    </Switch>
    </>
  );
}

export default App;
