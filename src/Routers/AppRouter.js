import {Router,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensepage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage' 
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/> 
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensepage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;