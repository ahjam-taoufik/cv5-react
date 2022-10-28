

export default  function SearchBox(props) {
 
    return ( 
        <input 
            className='search-box'
            placeholder={props.placeholder}
            type='search'
            onChange={props.onhandlerChange}
          />

    )
  
}
