import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import FacturesScreen from '../pages/facturesScreen'
import ClientsScreen from '../pages/clientsScreen'
import EntrepriseParamScreen from '../pages/entrepriseParamScreen'
import FactureParamScreen from '../pages/factureParamScreen'
import ParamGeneralScreen from '../pages/paramGeneralScreen'
import DisplayInvoice from '../components/pdf/displayInvoice'
import HomeScreen from '../pages/homeScreen'
import ResetPassword from '../components/resetPassword'

function Routes() {
  const user = localStorage.getItem('user')
  console.log('user : ', user)

  return (
    <Router>
      {/* <Sidebar /> */}
      <div className='RoutesContainer'>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/factures' exact component={FacturesScreen} />
          <Route
            path='/factures/generateinvoice'
            exact
            component={DisplayInvoice}
          />
          <Route path='/clients' exact component={ClientsScreen} />
          <Route
            path='/parametre/entreprise'
            exact
            component={EntrepriseParamScreen}
          />
          <Route
            path='/parametre/facture'
            exact
            component={FactureParamScreen}
          />
          <Route
            path='/parametre/general'
            exact
            component={ParamGeneralScreen}
          />
          <Route
            exact
            path='/reset_password/:token'
            component={ResetPassword}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
