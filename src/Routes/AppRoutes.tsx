import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {routes} from '../Utils/Constants'
import Home from '../components/Home/Home'
import NotFound from '../components/NotFound'
import AlbumDetails from '../components/albums/albumDetails/AlbumDetails'

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={routes.home} exact component={Home}/>
                <Route path={routes.album} exact component={AlbumDetails}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
