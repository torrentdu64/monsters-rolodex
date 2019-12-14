import React,{Component} from 'react';

import CardList from '../src/components/card-list/card-list.component';

import './App.css';
import SearchBar from '../src/components/search-bar/search-bar.component';

class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value })
  };
 
  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter( (monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="App">
      <h1> Monsters Rolodex</h1>
      <SearchBar 
      placeholder="search monster"
      handleChange={this.handleChange}
      />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }

}

export default App;
