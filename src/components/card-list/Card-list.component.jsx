import CardItem from '../card-item/card-item.component'
import './card-list.styles.css'


const CardList=({usersFiltred})=> (
      <div className='card-list'>
          { usersFiltred.map(user=>{
            return(
             <CardItem key={user.id} user={user} />

            )
          })}
      </div>
    )
   
export default CardList
