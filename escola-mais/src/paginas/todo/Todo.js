import React, { Component } from 'react';
import Api from '../../services/api/Api';
import Form from '../../components/form/Form';
import './todo.css';
import Button from '../../components/Button/Button';





class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoList: [],
            inputValue:'',
            title: '',
            error:''
        };
    }



    onChange = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value })
    }

    addTodo = () => {
        const userId = this.props.match.params.userId;
        const todoList = this.state.todoList;
        const value = {
            title: this.state.inputValue
        }
        if(value.title != ''){

            Api.post(`/users/${userId}/todos`, value)
            
            .then(res => {
                todoList.push(res.data)
                
                this.setState({ todoList: todoList,  inputValue: '', error: '' })
            })
        } else {
            this.setState({ error: 'Por favor, digite uma tarefa'})
        }
            

            
    }

    deleteTodo(id) {
        const todoList = this.state.todoList;


        Api.delete(`/todos/${id}/`)
            .then((res) => {
                console.log('res', res)
                const newTodoList = todoList.filter(todo => todo.id != id);
                this.setState({todoList: newTodoList})
            })
            .catch(error =>{
                console.log('error', error)
                this.setState({ error: 'Não foi possivel excluir a tarefa.'})
            })

    }


    componentDidMount = async () => {
        const userId = this.props.match.params.userId;
        const response = await Api.get(`/users/${userId}/todos`);
        this.setState({ todoList: response.data })
    };




    render() {
        const { todoList, error, id } = this.state;

        return (
            <div className='todo-content'>
            <div className='div-mae'>
                <div className='input-todo'>
                    <Form
                        value={this.state.inputValue}
                        onChange={this.onChange}
                       
                    />
                    <Button onClick={this.addTodo} />

                </div>
                <div>
                    {error && <p className='error'>{error}</p>}
                </div>

                <div className='div-li'>
                    {todoList.map(lista => (
                        <li key={lista.title}>
                            <div className='li-todo'>
                                <p>{lista.title}</p>
                                <button  onClick={() => this.deleteTodo(lista.id)} className='btn-excluir'>Excluir</button>

                            </div>
                        </li>

                    ))}
                </div>
            </div>
            </div>
        )

    }

};


export default Todo;