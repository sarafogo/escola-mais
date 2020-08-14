import React, { Component } from 'react';
import Api from '../../services/api/Api';
import './todo.css';




class Todo extends Component {
    constructor() {
        super()

        this.state = {
            todo: [],
        };
    }

    componentDidMount = async () => {
        const  id  = this.props.match.params.userId;
        
        const response = await Api.get(`/users/${id}/todos`);
        console.log(response)

        this.setState({ todo: response.data })
    }




    render() {
        const { todo } = this.state;
        console.log(todo)

        return (
            <div>

                



                <p>To do List</p>
                {todo.map(lista => (
                    <li key={lista.title}>
                        <p>{lista.title}</p>
                    </li>
                ))}
            </div>
        )

    }



}


export default Todo;