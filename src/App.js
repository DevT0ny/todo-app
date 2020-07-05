import React, {Component} from 'react';
import AddTodo from './components/AddTodo'
import './App.css';
import TodoComponent from './components/TodoComponent'
class App extends Component {
  state={
    todos:[
      {title:"1st",desc:"1st dec"},
      {title:"2st",desc:"2st dec"},
      {title:"3st",desc:"3st dec"}
    ]
  }
  addTodo= (todo)=>{
    let todos= this.state.todos
    todos.unshift(todo)
    this.setState({todos})
  }
  render(){
    return (
      <div className="container ">
        <h4>TODO app</h4>
        <AddTodo addTodo={this.addTodo} />
        {
          this.state.todos.map((todo,inx)=>{
            return (<TodoComponent todo={todo}  key={inx} />)
          })
        }
  
      </div>
    );
  }
}

export default App;
