import {Route, Routes, BrowserRouter, Router} from 'react-router-dom';
import { useState } from 'react';

import GlobalStyle from '../GlobalStyle/GlobalStyle'; //layout settings used for all screens
import UserContext from '../contexts/userContext'; //transfer information between components

import SignUp  from './ApplicationAccess/Sign-Up';



function App() {

    const contextValue = {};


    return (
            <>
                <GlobalStyle />
                <UserContext.Provider value = {contextValue}>
                    <BrowserRouter>
                    <Routes>
                        <Route path='/sign-up' element={<SignUp />}/>
                    </Routes>
                    </BrowserRouter>
                </UserContext.Provider>
            </>
        )
}

export default App;