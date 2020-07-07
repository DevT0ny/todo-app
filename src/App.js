import React, {Component} from 'react';
import AddTodo from './components/AddTodo'
import './App.css';
import TodoComponent from './components/TodoComponent'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class App extends Component {
  state={
    todos:[]
  }
  componentDidMount(){
    var data = JSON.parse(localStorage.getItem("todos"));
    var todos= data==null ? [] :data
    this.setState({
      todos
    })
    console.log("Mounted",todos)
    // if (!todos.length) document.getElementById("empty").style.display="block"
  }

  addTodo= (todo)=>{
    // let todos= this.state.todos
    // todos.unshift(todo)
    this.setState((state)=>{
      return {todos:[todo,...state.todos]};
    })
    console.log("added")
    // localStorage.setItem("todos",JSON.stringify(this.state.todos))
  }

  removeTodo = (_id,e) =>{
    console.group("Remove section")
    console.log("before",this.state.todos)
    this.setState(({todos})=>{
      return {todos:  todos.filter(({id} )=> id!==_id)}
    })
    console.log("after",this.state.todos)
    console.groupEnd()

  }
  componentWillUnmount(){console.log("got fired")}
  componentDidUpdate(){
    console.log("Updated",this.state.todos)
    localStorage.setItem("todos",JSON.stringify(this.state.todos))
    // if (this.state.todos.length) document.getElementById("empty").style.display="none";
    // else document.getElementById("empty").style.display="block";
  }

  createTodos=()=>{
    console.log(this.state.todos.length)
    if (this.state.todos.length){
      return (this.state.todos.map((todo)=>(
        <CSSTransition key={todo.id} timeout={500} classNames="fade">
          <TodoComponent todo={todo} removeTodo={this.removeTodo} />
        </CSSTransition>
      )))

    }else{
      return(<div id="empty" ><div>No- Todos left!</div></div>)
    }
    //  if(this.state.todos.length ===0 || this.state.todos.length===null) {
    //   console.log("fuck")
    //   return ()
    // }
  }

  render(){
    return (
      <div className="container ">
        <h3>Todo App</h3>
        <AddTodo addTodo={this.addTodo} />
        <div className="cont">
        <TransitionGroup className="todo-list" >
        {/* { this.createTodos() } */}
        {
          this.state.todos.length<=0 ? 
          (
            <CSSTransition key={-9} timeout={500} classNames="slow">
             <div id="empty" >No Todos left !</div>
            </CSSTransition>
          
          ):(
            this.state.todos.map((todo)=>(
            <CSSTransition key={todo.id} timeout={500} classNames="fade">
              <TodoComponent todo={todo} removeTodo={this.removeTodo} />
            </CSSTransition>))
          )
        }
        </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
