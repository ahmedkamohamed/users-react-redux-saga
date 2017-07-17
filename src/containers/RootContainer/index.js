import React, {Component} from 'react';
//import api from '../../utils/api.js'
import UserList from '../../components/UserList'
import UserDetail from '../../components/UserDetail'
import {Container, AppHeader, UserContainer} from './styles.js'
import { connect } from 'react-redux'
import {fetchUsersRequested} from './saga'
import {switchSelectedUser} from './reducer'
import { bindActionCreators } from 'redux'


class RootContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUser : {}
        };

        this.props.actions.fetchUsersRequested();
    }

    componentWillMount(){

    }

    componentDidMount() {
        // api.getData().then((users) => {
        //     // console.log(users);
        //     let userList = users.map( (user) => {return {_id : user._id, name: user.name, picture: user.picture+"/40?img="+(Math.floor(Math.random() * 70)+1), isActive: user.isActive}} );
        //
        //     this.setState({
        //       users,
        //       userList,
        //       selectedUser : users[0]
        //     });
        // })

    }

    switchUser = (userId) => {
      this.props.actions.switchSelectedUser(userId);
      // this.setState({
      //   selectedUser: this.props.users.find( user =>  user._id === userId)
      // })
    }

    render() {
        let selectedUser = this.state.selectedUser.name? this.state.selectedUser : this.props.selectedUser;

        let userContainer = this.props.users.length>0?(
          <UserContainer>
            <UserList users={this.props.userList} switchUser={this.switchUser}/>
            <UserDetail user={{...selectedUser, picture: selectedUser.picture+"/120?img="+(Math.floor(Math.random() * 70)+1)}}/>
          </UserContainer>
        ):
        (
          <div></div>
        )
        return (
            <Container>
              <AppHeader>
                <h2>Welcome to Users</h2>
              </AppHeader >
              {userContainer}
            </Container >
          );
    }
}

const mapStateToProps = state => ({
        users: state.container.users,
        userList: state.container.users.map( (user) => {return {_id : user._id, name: user.name, picture: user.picture+"/40?img="+(Math.floor(Math.random() * 70)+1), isActive: user.isActive}} ), //() => this.userListCreator(state.container.users),
        selectedUser : state.container.selectedUser
      });


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
      fetchUsersRequested: fetchUsersRequested,
      switchSelectedUser: switchSelectedUser
    }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)
