import React, { Component } from 'react';
import Api from '../../services/api/Api';
import './home.css';
import { Link } from 'react-router-dom';



class Home extends Component {
    constructor(props) {

        super(props);

        this.state = {
            usuarios: [],
            id: []

        }
    }

    async componentDidMount() {
        const response = await Api.get('/users');

        this.setState({ usuarios: response.data });
    }


    render() {
        const { usuarios } = this.state;


        return (
            <div className='home-content'>

                
                <p className='titulo'>Selecione um usuário para ver sua Lista de Tarefas:</p>
                {usuarios.map(usuario => (

                    <li className='usuarios' key={usuario.name} key={usuario.id}>
                        <Link to={`/todo/${usuario.id}/todos`} >
                            <p>{usuario.name}</p>
                        </Link>



                    </li>
                ))}
            </div>
        );
    };
};

export default Home;