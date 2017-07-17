import React, { Component } from 'react';
import {Wrapper, Avatar} from './styles'
import FaHandSpockO from 'react-icons/lib/fa/hand-spock-o';

class User extends Component {


  handleClicked = () => {
    this.props.userClicked(this.props.user._id)
  }

  render() {
    return (
      this.props.user ? (
        <Wrapper onClick={this.handleClicked}>
          <Avatar src={this.props.user.picture}/>
            {this.props.user.name.last}, {this.props.user.name.first} &nbsp;
              <FaHandSpockO color={this.props.user.isActive?"green":"red"} size="24"/>
        </Wrapper>
      ) : (
        <Wrapper></Wrapper>
      )
    );
  }
}

export default User;
