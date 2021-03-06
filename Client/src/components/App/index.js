import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//importing components from index.js files within component directories
//THESE ARE PAGES VARIABLES = lowercase
import Navigation from '../Navigation';

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import About from '../About';
import SearchAvailability from '../SearchAvailability';
import AccountSetUp from '../AccountSetUp';
import Chat from '../Chat/index';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session'; //make authenticated users available to all components

const App = () => (
            <Router>
                <div>
                    <Navigation/> {/* Navigation now uses the context to get the authenticated user */}
                    <hr />
                    {/* CREATING PAGE NAVIGATION WITH ROUTES: notice that the paths are the link-to's from navigation component and components props are pointing to their respective component content  */}
                    <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                    <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                    <Route path={ROUTES.FORGET_PASSWORD} component={PasswordForget}/>
                    <Route path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.ACCOUNT} component={Account}/>
                    <Route path={ROUTES.ACCOUNT_SET_UP} component={AccountSetUp}/>
                    <Route path={ROUTES.ABOUT} component={About}/>
                    <Route path={ROUTES.SEARCH_AVAILABILITY} component={SearchAvailability}/>
                    <Route path={ROUTES.CHAT} component={Chat}/>
                </div>
            </Router>
        )

export default withAuthentication(App);
