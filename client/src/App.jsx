import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SideBar } from './components'
import { 
  HomePage, 
  SiemBoKoe, 
  SBK_Supplies_Page, 
  ZihqerenPage,
  BatikPage,
  PropolaPage,  
} from './pages'

function App() {
  return (
    <>
    <SideBar/>
    <Switch>
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
