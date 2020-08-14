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
        console.log(response.data)

        this.setState({ usuarios: response.data });
    }



    // getUser = async (id) => {

    //     const response = await Api.get(`/users/${id}/todos`)


    //     //const { data } = await this.api.get(`users/${id}`);

    //    // console.log(data)

    //     // const resonse = await Api.get(`/`)
    //     // this.props.history.push({
    //     //     pathname: '/todo',
    //     //     // state: {
    //     //     //     user
    //     //     // }
    //     // })



    // }



    render() {
        const { usuarios } = this.state;


        return (
            <div>
                <h1>Usuários:</h1>

                <p>Selecione o usuário para ver a sua To do List:</p>
                {usuarios.map(usuario => (

                    <li key={usuario.name} key={usuario.id}>
                        <Link to={`/todo/${usuario.id}/todos`} >
                            <p>{usuario.name} - {usuario.id}</p>
                        </Link>



                    </li>
                ))}
            </div>
        );
    };
};

export default Home;