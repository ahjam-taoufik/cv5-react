import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/Card-list.component";


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
    const {users,searchfield}=this.state
    const {handlerChange}=this

   const usersFiltred=users.filter((user)=>{
    return user.name.toLowerCase().includes(searchfield)
    })
    return (
        <div className="App">
          <input 
            onChange={handlerChange}
          />

           <CardList usersFiltred={usersFiltred} />
        </div>
    )
  }
}
export default App;
