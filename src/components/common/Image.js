import React, {Component} from 'react';

class Image extends Component {

    render() {
        return (<img src={this.props.src} alt="logo" className={this.props.className}/>)
    }
}

export default Image;
