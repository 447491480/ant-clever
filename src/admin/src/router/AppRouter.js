import BaseComponent from '../components/Base/BaseComponent';
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import {genRouter} from './router';
const routes = genRouter();

class AppRouteMap extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        )
    }
}

export default AppRouteMap;