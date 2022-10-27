import { Component } from 'react'
import './card-list.styles.css'
export default class CardList extends Component {
  render() {
    const {usersFiltred}=this.props
    // console.log(usersFiltred);
    return (
      <div className='card-list'>
          { usersFiltred.map(user=>{
            return(
              <div className='card-container' key={user.id}>
                <img src={`https://robohash.org/${user.id}?size=200x200`} />
               <h1>{user.name}</h1> 
              </div>
            )
          })}
      </div>
    )
  }
}
