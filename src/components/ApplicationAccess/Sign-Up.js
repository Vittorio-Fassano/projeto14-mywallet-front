import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function SignUp() {
    const navigate = useNavigate();

    const [infosRegister, setInfosRegister] = useState({  name: "", email: "", password: "", confirmedPassword: "", });

    const modelSignUp = {
        name: infosRegister.name,
        email: infosRegister.email,
        password: infosRegister.password,
        confirmedPassword: infosRegister.confirmedPassword
    }

    const URL = 'https://mywallet-api-ggi9.onrender.com/sign-up';

    function Register(e) {
        e.preventDefault();
        const promise = axios.post(URL, modelSignUp);

        promise.then((response) => {
            setInfosRegister(response.data);
            navigate('/');
        });

        promise.catch(error => {
            console.log(error);
            alert("error signup");
        });
    }
        
    //inputs
    const renderInputs = Inputs();
    function Inputs() {
        return (
            <form onSubmit={Register}>
                <input
                    type='text'
                    placeholder='Nome'
                    onChange={e => setInfosRegister({ ...infosRegister, name: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Email'
                    onChange={e => setInfosRegister({ ...infosRegister, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    onChange={e => setInfosRegister({ ...infosRegister, password: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Confirmar senha'
                    onChange={e => setInfosRegister({ ...infosRegister, confirmedPassword: e.target.value })}
                />
                <button type='submit'>Cadastrar</button>
            </form>
        )
    }

    //render on screen
    return (
        <ContainerSignUp>
            <h1>MyWallet</h1>
            <ContainerInputs>
                {renderInputs}
            </ContainerInputs>
            <Link to="/"  style={{ textDecoration: 'none'}}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </ContainerSignUp>
    );
} 

//styles
const ContainerSignUp = styled.div `
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size:32px;
        margin-top:95px;
        margin-bottom:24px;
        text-align:center;
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
        line-height: 50px;
    }

    button {
        width:326px;
        height:46px;
        background: #A328D6;
        border-radius: 5px;
        border:none;
        margin-left:25px;
        color:white;
        font-size:20px;
        font-weight: 700;
        cursor:pointer;
        font-family: 'Raleway', sans-serif; 
    }

    p {
        height:18px;
        font-size:15px;
        font-weight:700;
        color: #FFFFFF;
        display:flex;
        justify-content:center;
        margin-top:32px;
        text-decoration: none;
        text-decoration-color: #8C11BE;
        font-family: 'Raleway', sans-serif; 
    }
`

const ContainerInputs = styled.div `
 
 input{
        font-family: 'Raleway', sans-serif; 
        width:326px;
        height:56px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:13px;
        margin-left:25px;
        padding-left:15px;
        padding-top:5px;
        font-size: 20px;
    }

    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }

    input::placeholder {
        font-weight: 300;
        font-size: 20px;
        color: #000000;
        font-family: 'Raleway', sans-serif; 
    }
`