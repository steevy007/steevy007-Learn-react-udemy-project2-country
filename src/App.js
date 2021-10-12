import React from 'react'
import PaysManger from './containers/PaysManager/PaysManger';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import UnPays from './containers/PaysManager/UnPays/UnPays';
import Error from './components/Error/Error';
import './App.css'
function App() {
  return (
    <BrowserRouter basename="/reactapp/country">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <h1>Vous etes a la page home</h1>} />
        <Route path="/pays" exact component={PaysManger} />
        <Route path="/pays/:nom" render={(props) => <UnPays nomPays={props.match.params.nom} />} />
        <Route path="/admin" exact render={() => <h1>Page Administration</h1>} />
        <Route  render={()=> <Error text="Page Introuvable" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
