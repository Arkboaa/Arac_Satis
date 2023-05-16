import React, { Component } from 'react'
import User from "./user"
import UserConsumer from '../context'
class Araba extends Component {
 
  render() {
    
    return (
      <UserConsumer>
        {
          value => {
            const {arabalar} = value;
              return(
                <div>
                  {
                    arabalar.map(user => {
                      return(
                        <User
                          key = {user.id}
                          marka = {user.marka}
                          model = {user.model}
                          yil = {user.yil}
                        />
                      )
                    })
                  }
                </div>
                )
          }
        }
      </UserConsumer>
    )
  }
}
export default Araba;