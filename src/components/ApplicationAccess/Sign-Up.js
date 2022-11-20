import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");


    async function newUser(e) {
        e.preventDefault();
        /* (e) is a synthetic event to prevent form default action of the borwser: If attributes (action and method )
           are not provided, the default URL is the current URL the form was submitted on, and the method is get 
        */
        const URLsignup = "https://mywallet-api-6vbn.onrender.com/sign-up" //back deploy link
        const body = { name, email, password, confirmedPassword };

        try {
            await axios.post(URLsignup, body);
            navigate("/sign-in")
        } catch (err) {
            console.log(err);
            alert("error registering user");
        }
    } //end of function input

    //inputs
    const renderInputs = inputs();
    function inputs() {
        return (
            <form onSubmit={newUser}>
                <input
                    type='text'
                    placeholder='Nome'
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Senha'
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Confirmar senha'
                    onChange={e => setConfirmedPassword(e.target.value)}
                />
            </form>
        )
    }


    //render on screen
    return (
        <ContainerSignUp>
            <h1>MyWallet</h1>
            <ContainerInputs>{renderInputs}</ContainerInputs>
            <Link to="sign-in">
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
    }

    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }

    input::placeholder {
        font-weight: 300;
        font-size: 20px;
        color: #000000;
    }
`