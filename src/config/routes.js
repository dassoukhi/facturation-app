import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import FacturesScreen from '../pages/facturesScreen'
import ClientsScreen from '../pages/clientsScreen'
import EntrepriseParamScreen from '../pages/entrepriseParamScreen'
import FactureParamScreen from '../pages/factureParamScreen'
import ParamGeneralScreen from '../pages/paramGeneralScreen'
import DisplayInvoice from '../components/pdf/displayInvoice'


function Routes() {
  return (
    <Router>
      <Sidebar />
      <div className='RoutesContainer'>
        <Switch>
          <Route path='/factures' exact component={FacturesScreen} />
          <Route path='/factures/generateinvoice' exact component={DisplayInvoice} />
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
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
