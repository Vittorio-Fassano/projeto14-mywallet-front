import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useState, userContext, useEffect} from 'react';

import GlobalStyle from '../GlobalStyle/GlobalStyle'; //layout settings used for all screens

import UserContext from '../contexts/userContext'; //transfer information between components

import SignIn  from './ApplicationAccess/Sign-In'; //login
import SignUp  from './ApplicationAccess/Sign-Up'; //register
import Transactions from './Transactions/Transactions';
import NewEntry from './Transactions/NewEntry';
import NewExit from './Transactions/NewExit';


function App() {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    const nameStorage = JSON.parse(localStorage.getItem('name'));
    const [userInformations, setUserInformations] = useState(tokenStorage); // user data (this state is essencial for all project)
    const [userName, setUserName] = useState(nameStorage);


    useEffect(() => {
        if (tokenStorage) {
            setUserInformations(tokenStorage);
            setUserName(nameStorage);
        }
    }, []);

    const contextValue = { userInformations, setUserInformations, userName, setUserName};
    console.log(userInformations)

    return (
            <>
                <GlobalStyle />
                    <UserContext.Provider value={contextValue}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<SignIn />}/>
                                <Route path='/sign-up' element={<SignUp />}/>
                                <Route path='/transactions' element={<Transactions />}/>
                                <Route path='/transactions/new-entry' element={<NewEntry />}/>
                                <Route path='/transactions/new-exit' element={<NewExit />}/>
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
            </>
        )
}

export default App;

//<Route path='/transactions/entry' element={<NewTransaction />}/>
//<Route path='/transactions/exit' element={<NewTransaction />}/>