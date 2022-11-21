import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../contexts/userContext';

export default function SignIn() {
    const { setUserInformations, setUserName} = useContext(UserContext); //get a state through the context
    const [infosSignIn, setInfosSignIn] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const modelSignIn = {
        email: infosSignIn.email,
        password: infosSignIn.password
    }

    const URLsignin = "https://mywallet-api-ggi9.onrender.com" //back deploy link

    function newLogin(e) {
        e.preventDefault();

        const promise = axios.post(URLsignin, modelSignIn)
        promise.then((response) => {
            setUserName(response.data.name);
            console.log(setUserName);

            setUserInformations(response.data.token);
            console.log(setUserInformations);
            
            const user = JSON.stringify(response.data.token);
            localStorage.setItem('token', user)

            const userName = JSON.stringify(response.data.name);
            localStorage.setItem('name', userName)


            navigate("/transactions");
        })
        promise.catch(err => {
            console.log(err);
            alert("error login");
        })
    }

    //inputs
    const renderInputs = inputs();
    function inputs() {
        return (
            <form onSubmit={newLogin}>
                <input
                    type='text'
                    placeholder='email'
                    value={infosSignIn.email}
                    onChange={e => setInfosSignIn({ ...infosSignIn, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='senha'
                    value={infosSignIn.senha}
                    onChange={e => setInfosSignIn({ ...infosSignIn, password: e.target.value })}
                />
                <button type='submit'>Entrar</button>
            </form>
        )
    }

    //render on screen
    return (
        <ContainerSignIn>
            <h1>MyWallet</h1>
            <ContainerInputs>
                {renderInputs}
            </ContainerInputs>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </ContainerSignIn>
    );
};

const ContainerSignIn = styled.div`
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size:32px;
        margin-top:149px;
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
        margin-top:36px;
        text-decoration: none;
        text-decoration-color: #8C11BE;
        font-family: 'Raleway', sans-serif; 
    }
`

const ContainerInputs = styled.div`
 input{
        width:326px;
        height:56px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:13px;
        margin-left:25px;
        padding-left:15px;
        padding-top:5px;
        font-size: 20px;
        font-family: 'Raleway', sans-serif; 
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