import React, {Component} from 'react';
import Proptypes from 'prop-types';


import './Task.css';

class Task extends Component{

    StyleCompleted(){
        return {
            fontSieze: '20px',
            //de la tarea que me están pasando si su propiedad done es 'true', coloca el color del texto en gris 'gray',en caso contrario
            //colócalo en negro
            //usamos un if condicional como operador ternario
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through': 'none'
        }
    }

    render(){

        /*Con esta línea de código de Javascript me evito tener que repetir "this.props.task", sólo tengo que usar "taks"*/
        const {task} = this.props;

        //También se pueden poner los estilos en línea
        /*return <p className='red'>*/
        
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id} -
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/> -
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
        </p>
    }
}

Task.propTypes = {
    task: Proptypes.object.isRequired,
    deleteTask: Proptypes.func,
    checkDone: Proptypes.func    

}


/*Lo bueno de declarar las CSS en el propio javascript, es que se podrán editar después dinámicamente. 
A diferencia con los CSS tradicionales*/
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;