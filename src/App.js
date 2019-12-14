import React,{Component} from 'react';

import './App.css';

class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      monsters: [
       
      ]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monsters: user}))
  }
 
  render(){
    return (
      <div className="App">
        {this.state.monsters.map( (monster) => {
          return <h1>{monster.name}</h1>
        })}
      </div>
    );
  }

}

export default App;
