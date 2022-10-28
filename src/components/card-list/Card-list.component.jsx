import { Component } from 'react'
import CardItem from '../card-item/card-item.component'
import './card-list.styles.css'
export default class CardList extends Component {
  render() {
    const {usersFiltred}=this.props
    return (
      <div className='card-list'>
          { usersFiltred.map(user=>{
            return(
             <CardItem key={user.id} user={user} />

            )
          })}
      </div>
    )
  }
}
