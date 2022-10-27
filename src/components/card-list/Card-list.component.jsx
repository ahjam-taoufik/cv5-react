import { Component } from 'react'
import CardItem from '../card-item/card-item.component'
import './card-list.styles.css'
export default class CardList extends Component {
  render() {
    const {usersFiltred}=this.props
    // console.log(usersFiltred);
    return (
      <div className='card-list'>
          { usersFiltred.map(user=>{
            return(
             <CardItem user={user} />

            )
          })}
      </div>
    )
  }
}
