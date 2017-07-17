import React, { Component } from 'react';
import {Wrapper, Avatar} from './styles'
import './styles.css'

class UserDetail extends Component {


  render() {
    return (
      this.props.user.name? (
        <Wrapper>
        <div className="header">
          <div className="user-identity">
            <Avatar src={this.props.user.picture}/>
            <div className="name">{this.props.user.name.last}, {this.props.user.name.first}</div>
          </div>
          <div className="user-about">

            <div>Address: {this.props.user.address}</div>
            <div>Email: {this.props.user.email}</div>
            <div>Phone: {this.props.user.phone}</div>
            <div>Age: {this.props.user.age}</div>
          </div>
        </div>
         </Wrapper>
      ) : (
        <Wrapper></Wrapper>
      )
    );
  }
}

export default UserDetail;
