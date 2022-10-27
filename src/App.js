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

  //if you don't use arrow function , an error is Handler
   handlerChange=(event)=>{
    console.log("ok");
    const searchfieldLowerCase=event.target.value.toLowerCase()
     this.setState({searchfield:searchfieldLowerCase})
  }

  render() {

   const usersFiltred=this.state.users.filter((user)=>{
    return user.name.toLowerCase().includes(this.state.searchfield)
    })
    return (
        <div className="App">
          <input 
            onChange={this.handlerChange}
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
