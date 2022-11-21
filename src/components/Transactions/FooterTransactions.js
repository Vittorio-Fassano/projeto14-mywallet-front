import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterTransaction() {
    return (
        <ContainerFooter>
            <Link to="/transactions/new-exit" style={{ textDecoration: 'none' }}>
                <ContainerEntry>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova <br /> Saída</p>
                </ContainerEntry>
            </Link>
            <Link to="/transactions/new-exit" style={{ textDecoration: 'none' }}>
                <ContainerExit>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova <br /> Saída</p>
                </ContainerExit>
            </Link>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
    width: 326px;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        text-decoration: none;
    }
`;

const ContainerEntry = styled.div`
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    background: #A328D6;
    border-radius: 5px;

    ion-icon{
        position:absolute;
        font-size:23.88px;
        color:white;
        margin-top: 8.56px;
        margin-left: 9.56px;
        cursor:pointer;
    }

    p{
        position:absolute;
        font-size:17px;
        color:white;
        margin-top: 70px;
        margin-left: 9.56px;
        cursor:pointer;
    }
`;

const ContainerExit = styled.div`
    width: 156px;
    height: 114px;
    left: 195px;
    top: 537px;
    background: #A328D6;
    border-radius: 5px;

    ion-icon{
        position:absolute;
        font-size:23.88px;
        color:white;
        margin-top: 8.56px;
        margin-left: 9.56px;
        cursor:pointer;
    }

    p{
        position:absolute;
        font-size:17px;
        color:white;
        margin-top: 70px;
        margin-left: 9.56px;
        cursor:pointer;
    }
`;