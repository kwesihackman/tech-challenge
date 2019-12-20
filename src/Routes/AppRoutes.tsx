import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {routes} from '../Utils/Constants'
import Home from '../components/Home/Home'
import Albums from '../components/albums/album/Album'
import NotFound from '../components/NotFound'

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={routes.home} exact component={Home}/>
                <Route path={routes.album} exact component={Albums}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
