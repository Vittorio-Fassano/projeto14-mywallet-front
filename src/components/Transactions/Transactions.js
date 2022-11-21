import { useState,useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../../contexts/userContext';
import FooterTransaction from './FooterTransactions';


export default function Transactions() {
    const [transactions, setTransactions] = useState([])
    const {userInformations, userName} = useContext(UserContext);
    console.log(userInformations);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInformations}`
            }
        }

        const URLtransactions = "https://mywallet-api-ggi9.onrender.com/transactions";

        const promise = axios.get(URLtransactions, config);
        promise.then((response) => {
            setTransactions(response.data);
        });
        promise.catch(error => {
            console.log(error);
            alert("error accessing transactions");
        });
    }, []);
    
    
    
    /*useEffect(() => { //token
        async function findUser() {
            try {
                const {data} = await axios.get(URLtransactions, 
                    { headers : {Authorization: `Bearer ${userInformations.token}`}}); //access the token that was generated when signing in
                setTransactions(data);
            } catch (err) {
                console.log(err);
                alert("error accessing transactions");
            }
        }
        findUser();
    }, [] );  /*the useEffect is for the request to the axios happen only once "[]", 
                only on the first rendering, avoiding an infinite loop, 
                in this case, activate the token only once per page*/ 

    return (
        <ContainerContent>
            <Header>
                <h2>{`ola, ${userName}`}</h2>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <ContainerMain>
                {
                    transactions.length > 0 ?

                        <>
                       {transactions.map(transaction => <UserTransactions info={transaction} key={transactions.id} />)}
                        </>

                        :
                        <ContainerEmpty>
                            <p>Não há registros de <br /> entrada ou saída</p>
                        </ContainerEmpty>
                }
            </ContainerMain>
            <FooterTransaction />
        </ContainerContent>

    );
}

function UserTransactions(props) {

    const { info } = props
    const colorEnter = '#03AC00';
    const colorExit = '#C70000';

    return (
        <ContainerTransactions color={info.type === "new entry" ? colorEnter : colorExit}>
            <p>{info.date}</p>
            <p>{info.description}</p>
            <p >{info.value}</p>
        </ContainerTransactions>
    );
}

const ContainerTransactions = styled.div`
    display: flex;
    line-height: 23px;
    margin-top: 23px;
    p:first-child {
        margin-left: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    p:nth-child(2) {
        margin-left: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
    p:last-child {
        margin-left: auto;
        margin-right: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: ${props => props.color};
    }
`;

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #8C11BE;
    height: 100vh;

    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    width: 326px;

    ion-icon{
        font-size:30px;
        color:white;
        cursor:pointer;
    }
`;

const ContainerMain = styled.div`
    width: 326px;
    height: 420px;
    overflow-y: scroll;
    background: #FFFFFF;
    border-radius: 5px 5px 0px 0px;
`;

const ContainerEmpty = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    align-items: center;
    color: #868686;
    margin-top: 200px;
`;
