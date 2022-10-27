import { Component } from "react";
import "./App.css";


class App extends Component {
  constructor (){
    super()
    this.state={
      users:[],
      searchfield:''
    }
   
  }

  async componentDidMount(){

     const res= await fetch('https://jsonplaceholder.typicode.com/users')
     const data=await res.json()
     this.setState(()=> {return {users:data}})
  }

  render() {

   const usersFiltred=this.state.users.filter((user)=>{
    return user.name.toLowerCase().includes(this.state.searchfield)
    })
    return (
        <div className="App">
          <input 
            onChange={(event)=>{
              const searchfieldLowerCase=event.target.value.toLowerCase()
               this.setState({searchfield:searchfieldLowerCase})
            }}
          />
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
export default App;
