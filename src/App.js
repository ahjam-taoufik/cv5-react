import { Component } from "react";
import "./App.css";


class App extends Component {
  constructor (){
    super()
    this.state={
     
      name:'taoufik'
    }
    console.log('constructor');
  }

  async componentDidMount(){
    console.log('componentDidMount');
   
    this.setState({name:'toto'},()=>{console.log(this.state.name)})
    
  }


  render() {
    console.log('render');
  
    return (
        <div className="App">
          <h1>{this.state.name}</h1>
        </div>
    )
  }
}

export default App;
