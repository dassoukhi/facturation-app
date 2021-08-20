import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Factures from '../pages/factures'
import Sidebar from '../components/Sidebar'

function Routes() {
  return (
    <Router>
      <Sidebar />
      <div className='RoutesContainer'>
        <Switch>
          <Route path='/factures' exact component={Factures} />
          <Route path='/clients' exact component={Profile} />
          <Route path='/parametre/entreprise' exact component={Login} />
          <Route path='/parametre/facture' exact component={Login} />
          <Route path='/parametre/general' exact component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
