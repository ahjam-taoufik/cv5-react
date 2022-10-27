import { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
        <input 
            className='search-box'
            placeholder={this.props.placeholder}
            type='search'
            onChange={this.props.onhandlerChange}
          />

    )
  }
}
