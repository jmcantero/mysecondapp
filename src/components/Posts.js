import React, { Component } from 'react'

export default class Posts extends Component {
    
    state = {
        posts: []
    }


    //se podría hacer a través de una "promesa" (then) o un callback (ambos cod javascript), 
    //pero usamos nuevas funcionalidades de react
    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then()*/
    
    //para llamar a una API de forma asíncrona de forma novedosa "async await"
    //este método no hay que llamarlo, se llama sólo cuando se carga el componente
    async componentDidMount(){
        //usamos await porque llevará un tiempo y debe esperar
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        //usamos await porque llevará un tiempo y debe esperar        
        const data = await res.json();
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>

                        </div>
                    })
                }
            </div>
        )
    }
}

