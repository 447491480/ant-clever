import React from 'react';
import BaseComponent from '../BaseComponent';

import Loading from '../Loading';

export default (loadComponent, placeholder = <Loading/>) => {
    class Dynamic extends BaseComponent {
        constructor() {
            super();

            this.state = {
                component: null
            };

            this.unmount = false;
        }

        componentWillUnmount() {
            this.unmount = true
        }

        async componentDidMount() {
            const {default: component} = await loadComponent();

            if(this.unmount) return;

            this.setState({
                component: component
            })
        }

        render() {
            const C = this.state.component;

            return (
                C ? <C {...this.props} /> : placeholder
            )
        }
    }

    return Dynamic
}
