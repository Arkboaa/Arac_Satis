import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {

}
export class UserProvider extends Component {
    state = {
        arabalar:[
          {
            id : 1,
            marka : "Tofaş",
            model : "Şahin",
            yil : "1993"
          },
          {
            id : 2,
            marka : "Toyota",
            model : "Corolla",
            yil : "2015"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }
  render() {
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;