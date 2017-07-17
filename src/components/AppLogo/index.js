import React, {Component} from 'react';
import {Logo} from './styles';
import logoSvg from './logo.svg';

class AppLogo extends Component {

    render() {
        return (<Logo src={logoSvg}/>)
    }
}

export default AppLogo;
