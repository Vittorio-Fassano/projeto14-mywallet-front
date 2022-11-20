import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useState} from 'react';

import GlobalStyle from '../GlobalStyle/GlobalStyle'; //layout settings used for all screens

import UserContext from '../contexts/userContext'; //transfer information between components

import SignIn  from './ApplicationAccess/Sign-In'; //login
import SignUp  from './ApplicationAccess/Sign-Up'; //register



function App() {
    
    const [userInformations, setUserInformations] = useState(null); // user data

    return (
            <>
                <GlobalStyle />
                    <UserContext.Provider value = {{userInformations, setUserInformations}}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<SignIn />}/>
                                <Route path='/sign-up' element={<SignUp />}/>
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
            </>
        )
}

export default App;