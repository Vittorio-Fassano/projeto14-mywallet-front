import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../contexts/userContext';



export default function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUserInformations} = useContext(UserContext); //get a state through the context
    const navigate = useNavigate();

    async function newLogin (e) {
        e.preventDefault();
        const URLsignin = "https://mywallet-api-ggi9.onrender.com" //back deploy link
        const body = { email, password};

        try {
            const {data} = await axios.post(URLsignin, body); //get the data that the post route sends through the body
            setUserInformations(data);//insert this data in the "userInformations" state through "setUserInformations"
            navigate("/sign-up") //if the registration is successful, go to the transactions screen
        } catch (err) {
            console.log(err);
            alert("error when logging in");
        }
    }//end of function newLogin

    //inputs
    const renderInputs = inputs();
    function inputs() {
        return (
            <form onSubmit={newLogin}>
                <input
                    type='text'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Confirmar senha'
                    onChange={e => setPassword(e.target.value)}
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
            <Link to="/sign-up"  style={{ textDecoration: 'none'}}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </ContainerSignIn>
    );
};

const ContainerSignIn = styled.div `
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
    }
`

const ContainerInputs = styled.div `
 
 input{
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