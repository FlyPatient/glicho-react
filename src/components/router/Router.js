import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enroute from 'enroute';
import invariant from 'invariant';

class Router extends Component { 
    constructor(props) {
        super(props);
        this.routes = {}; 
        this.addRoutes(props.children);
        this.router = enroute(this.routes);
    }

    addRoute(element, parent) {
        const { component, path, children, index} = element.props;

        const render = (params, renderProps) => {
            const finalProps = Object.assign({params}, this.props, renderProps);
            const hasIndexRoute = index && path === finalProps.location;
            
            const children = hasIndexRoute ? 
    React.createElement(component, finalProps,React.createElement(index, finalProps))
    : React.createElement(component, finalProps); 

            return parent ? parent.render(params, { children }) : children;
        };

        const route = this.normalizeRoute(path, parent);

        if(children) {
            this.addRoutes(children, {route, render});
        }
        this.routes[this.cleanPath(route)] = render;
    }

    addRoutes(routes, parent) {
        React.Children.forEach(routes,  route => {
            this.addRoute(route, parent);
        });
    }

    cleanPath(path) {
        return path.replace(/\/\//g, '\/')
    }

    normalizeRoute(path, parent) {
        if(path[0] === '/') {
            return path;
        }

        if(parent == null) {
            return path;
        } 

        return `${parent.route}/${path}`;
    }

    render() {
        const {location} = this.props;
        return this.router(location);
    }  
} 

Router.propTypes = {
        children: PropTypes.element.isRequired,
        location: PropTypes.string.isRequired 
    }

export { Router };