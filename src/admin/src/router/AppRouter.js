import BaseComponent from '../components/BaseComponent';
import React from 'react'
import {
    Route,
    Switch,
    HashRouter,
    BrowserRouter
} from 'react-router-dom'

import routes from './router';

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

export class MultiPageRouter extends BaseComponent {
    render = () => (
        <HashRouter>
            <Switch>
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </HashRouter>
    )
}

class AppRouteMap extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MultiPageRouter routes={routes}/>
        )
    }
}

export default AppRouteMap;
