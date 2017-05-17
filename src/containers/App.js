import React from 'react';

import Navbar from '../components/nav/Nav';

class App extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app"> 
               <Navbar /> 
               <div className="container-fluid">
                   { children } 
               </div>
            </div>
        );
    }
}

export { App };