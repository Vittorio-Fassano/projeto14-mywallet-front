import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../contexts/userContext';

export default function NewExit() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { userInformations } = useContext(UserContext);

    async function Exit(e) {
        e.preventDefault();

        const headers = { //token
            headers: { Authorization: `Bearer ${userInformations}` }
        };

        const modelNewExit = {
            description,
            type: "new exit", //how is it in the backend
            value,
        };

        const URLnewexit = "https://mywallet-api-ggi9.onrender.com/transactions"

        try {
            await axios.post(URLnewexit, modelNewExit, headers);
            alert("successful transaction");
            navigate("/transactions");

        } catch (err) {
            console.log(err);
            alert("error when doing transaction");
        }
    }

    return (
        <ContainerExit>
            <h1>Nova saída</h1>
            <form>

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button type='submit' onClick={Exit}>Salvar saída</button>
            </form>
        </ContainerExit>
    )
}

const ContainerExit = styled.div`
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 26px;
        font-weight: 700;
        margin-top:25px;
        margin-left:24px;
        margin-bottom: 40px;
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
    }
    input{
        width:326px;
        height:56px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:13px;
        margin-left:25px;
        padding-left:15px;
        padding-top:5px;
        font-family: 'Raleway', sans-serif;
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