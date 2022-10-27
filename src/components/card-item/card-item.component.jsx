import React, { Component } from 'react'
import './card-item.styles.css'
export default class CardItem extends Component {
  render() {
    const {user:{id,name,email}}=this.props
    return (
        <div className='card-container' key={id}>
           <img src={`https://robohash.org/${id}?size=200x200`} />
            <h3>{name}</h3> 
            <h4>{email}</h4> 
        </div>
    )
  }
}
