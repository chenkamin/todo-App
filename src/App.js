import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import Inputs from './components/Inputs';
import Headers from './components/Headers';
import CategoriesPage from './components/CategoriesPage';
import Dashboard from './components/Dashboard';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoPage from './components/TodoPage';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data : [],
      todo: "",
      category: "",
      date: "",
      status: ""
    }
  }

  getData = async () =>  {
    let data = await axios.get("http://localhost:8080/todos")
    return data
 }

 postData = async () => {
  let data = await axios.post("http://localhost:8080/todo", {
    
    todo: this.state.todo,
    category: this.state.category,
    date: this.state.date,
    status: this.state.status
  })
  return data
}

 componentDidMount = async () =>{
  let data = await this.getData()
  console.log(data.data)
  this.setState({ data: data.data })
}
handleInput = (e) => {
  const target = e.target
  const value =target.value;
  const name = target.name;

  this.setState({[name] : value})
}

claeanInputs = () => {
  this.setState({
  todo:"",
  date: "",
  category: ""
  })
 
}
makeNewToDo = async() =>{
  await this.postData()    
  await this.componentDidMount()
  this.claeanInputs()
}

  render() { 
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/dashboard">  Dashboard</Link>
      <div>
        <Route path="/" exact render={() => <Inputs value={this.state} handleInput={this.handleInput} makeNewToDo={this.makeNewToDo} />} />
        <Route path="/" exact render={() => <Headers  />} />

        <Route path="/" exact render={() => <Todos   data={this.state.data}  value={this.state.status}/>} />
        <Route path="/todos/:name" exact render={({match}) => <TodoPage match={match} state={this.state}  data={this.state.data}/>} />
        <Route path="/todos/categories/:name" exact render={({match}) => <CategoriesPage match={match} state={this.state}  data={this.state.data}/>} />
      <Route path="/dashboard" exact render ={() => <Dashboard  data ={this.state.data}/>} />

       
      </div>
      </Router>

      )
  }
}
 
export default App;
