import React,{Component} from 'react';

import './App.css';

class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankestein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map( (monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    );
  }

}

export default App;
