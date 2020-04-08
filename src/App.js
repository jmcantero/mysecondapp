//Si importo aquí sólo REact, abajo tengo que usar el React.Component para extender la clase
//import React from 'react';

//Otra forma de montar el componente de la aplicación, como función
/*function App() {
  return (
    <div>
      Hellow World
    </div>
  );
}*/


//Si importo aquí el componente: React.Component, abajo sólo tengo que usar Component para extender la clase
import React, { Component } from 'react';
//react-router-dom porque es para navegador, para APP nativa sería otro
//importamos el enrutador "BrowserRouter" y lo llamamos Router, para que sea más fácil de usar.
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';

//quiero importar un vector de tareas que viene de la dirección
import tasks from './sample/tasks.json'

//Componentes
import Tasks from './components/Tasks'
import Taskform from './components/Taskform'
import Posts from './components/Posts'



//componente para tener nuestro propio console log
const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

// console.log(tasks)


//Componente de la aplicación como Clase
class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    console.log(title, description);

    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      //agregar un nuevo elemento al array actual
      tasks: [...this.state.tasks, newTask] 
    })
  
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
    console.log (this.state.tasks);

  }


  checkDone = (id) => {
    const newTasks = this.state.tasks.map( tasks => {
      if (tasks.id === id){
        tasks.done = !tasks.done
      }
      return tasks;
    })

    this.setState ({tasks: newTasks})

  }


  render(){

    return (
      <div>      
        
       <Router>
            <Link to="/test_react/">Home</Link>
            <br/>
            <Link to="/test_react/posts">Posts</Link>

            {/*cuando el usuario visite la ruta "/" que renderice/pinte algo*/}
            {/*si no ponemos exact, al enrutar "posts" muestra todo el contenido de "/" y el contenido de 
            "post", ambas cosas.*/}
            <Route exact path="/test_react/" render={() => {
              //tengo que colocarlo los 2 componentes dentro de un 1 div porque sólo puede devolver una cosa
              return <div>
                <Taskform addTask={this.addTask} />
                <Tasks 
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask} 
                  checkDone={this.checkDone}
                />
              </div>          
            }}>
            </Route>
            <Route path="/test_react/posts" component={Posts} />
       </Router>

        {/* el contenido de las llaves, dentro de return, interpreta cualquier código javascript*/}
        {/* map, nativo de javascripto, para recorrer vectores, tipo for*/}
        {/* por cada recorrido de la función map: "e" (elemento),quiero que me devuelva algo (lo que hay a la derecha de "=>"*/}
        {/* this.state.tasks.map(e => <h1>{e.title}</h1>)*/}
        {/* react necesita para los bucles, tipo map, que se le añada un "id" distinto a cada elmento, mediante la etiqueta "key"*/}
        { /* this.state.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done} - {e.id}
            <Tasks/>
          </p>
          )*/
        }

        {/* <ConsoleLog>{ tasks }</ConsoleLog>     */}
      </div>
    )

  }
}


export default App;
