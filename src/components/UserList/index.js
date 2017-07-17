import React, { Component } from 'react';
import User from '../User'
import {Wrapper} from './styles'

class UserList extends Component {


  userClicked = (userId) => {
    this.props.switchUser(userId)
  }


  render() {
    let users = this.props.users.map((user) =>
      <User user={user} key={user._id} userClicked={this.userClicked}/>
    );
    return (
      users.length>0? (
        <Wrapper>{users}</Wrapper>
      ) : (
        <div></div>
      )
    );
  }
}

export default UserList;
