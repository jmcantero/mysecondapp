import React, { Component } from 'react';

//si definimos así el componente, debemos poner abajo "export default Taskform;"
/*class Taskform extends Components{*/

//si definimos así el componente, no tenemos que poner abajo el "export default Taskform;"
export default class Taskform extends Component {
    
    state = {
        title: '',
        description: ''
    }
    
    //3 formas de escribir la misma línea, pasando el evento a la función onSubmit
    /*onSubmit = (event) => {
    onubmit = (e) => {*/
    //como es un sólo parámetro, podemos poner así:
    onSubmit = e => {                    
        //console.log('submiting ...');
        //cancelo el funcionamiento por defecto del "Submit", con el objetivo final de que no se recargue la página
        e.preventDefault();

        this.props.addTask(this.state.title, this.state.description);        
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })

    }
   
    render() {

        //this.props.addTask('title one', 'description one');        

        return (

            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder = "Write a Task"
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/><br/>
                <textarea 
                    name="description"                
                    placerholder="Write a description"
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <br/><br/>
                <input type="submit" />
            </form>
        )

    }
}
