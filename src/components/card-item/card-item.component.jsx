import './card-item.styles.css'

const  CardItem=(props)=>  {

    const {user:{id,name,email}}=props
    return (
        <div className='card-container' key={id}>
           <img src={`https://robohash.org/${id}?size=200x200`} />
            <h3>{name}</h3> 
            <h4>{email}</h4> 
        </div>
    )
  
}

export default CardItem;
