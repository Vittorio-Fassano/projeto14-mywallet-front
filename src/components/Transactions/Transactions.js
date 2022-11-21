import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/userContext';
import FooterTransaction from './FooterTransactions';


export default function Transactions() {
    const [transactions, setTransactions] = useState([])
    const { userInformations, userName, setUserInformations, setUserName } = useContext(UserContext);
    console.log(userInformations);
    const navigate = useNavigate();
    

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



    function Soma() {
        const colorEnter = '#03AC00';
        const colorExit = '#C70000'

        let total = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === "new entry") {
                total += parseInt(transaction.value);
            } else {
                total -= parseInt(transaction.value);
            }

        });

        console.log(total)

        return (
            <ContainerSaldo>
                <SaldoP>
                    {`SALDO`}
                </SaldoP>
                <h3 style={total >= 0 ? {color: `${colorEnter}`} : {color: `${colorExit}`}}>
                    {total}
                </h3>
            </ContainerSaldo>
        )
    }

    function logOut() {
        if (window.confirm("Do you want to log out?")) {
            window.localStorage.removeItem('token');
            window.localStorage.clear('token');
            window.localStorage.removeItem('name');
            window.localStorage.clear('name');
            setUserInformations(null);
            setUserName(null);
            navigate("/");
        }
    }

    return (
        <ContainerContent>
            <Header>
                <h2>{`ola, ${userName}`}</h2>
                <ion-icon name="exit-outline" onClick={() => logOut()}></ion-icon>
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
                <Soma />
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


const SaldoP = styled.p`
    position: absolute;
    bottom: 0;
    margin-left: 12px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    color: #000000;

`
const ContainerSaldo = styled.div`
    position: absolute;
    bottom: 0;
    border-radius: 5px 5px 0px 0px;

    h3{
        margin-bottom: 6px; 
        margin-left: 245px;
        font-size: 17px;
    }
`
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
    position: relative;
    width: 326px;
    height: 420px;
    overflow-y: scroll;
    background: #FFFFFF;
    border-radius: 5px 5px 5px 5px;
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

