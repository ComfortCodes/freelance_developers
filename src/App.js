import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'; 
import './App.css';

class  App  extends Component{
  constructor(){
    super();
    this.state={
      developers : [],
      searchField : ''
     }
    };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({developers:users}));
  }
  render(){
    const {developers, searchField} = this.state;
    const filteredDevelopers = developers.filter(developer => developer.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Freelance Developers</h1>
       <SearchBox
       placeholder='search'
       handleChange={e => this.setState({searchField : e.target.value })}
       />
        <CardList developers={filteredDevelopers}/>
      </div>
    );
  }
  }
  

export default App;
