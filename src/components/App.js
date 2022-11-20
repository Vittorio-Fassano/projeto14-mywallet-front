import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { useState} from 'react';

import GlobalStyle from '../GlobalStyle/GlobalStyle'; //layout settings used for all screens

import UserContext from '../contexts/userContext'; //transfer information between components

import SignUp  from './ApplicationAccess/Sign-Up'; //register
import SignIn  from './ApplicationAccess/Sign-In';


function App() {
    
    const [userInformations, setUserInformations] = useState(null); // user data

    return (
            <>
                <GlobalStyle />
                    <UserContext.Provider value = {{userInformations, setUserInformations}}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/sign-up' element={<SignUp />}/>
                                <Route path='/sign-in' element={<SignIn />}/>
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
            </>
        )
}

export default App;