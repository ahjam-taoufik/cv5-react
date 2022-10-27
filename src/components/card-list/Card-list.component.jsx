import { Component } from 'react'

export default class CardList extends Component {
  render() {
    const {usersFiltred}=this.props
    // console.log(usersFiltred);
    return (
      <div>
          { usersFiltred.map(user=>{
            return(
              <div key={user.id}>
               <h1>{user.name}</h1> 
              </div>
            )
          })}
      </div>
    )
  }
}
