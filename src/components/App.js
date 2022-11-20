import {Route, Routes, BrowserRouter, Router} from 'react-router-dom';
import { useState } from 'react';

import GlobalStyle from '../GlobalStyle/GlobalStyle'; //layout settings used for all screens
import UserContext from '../contexts/userContext'; //transfer information between components

function App() {

    return (
            <>
                <GlobalStyle />
                <UserContext.Provider value = {conxtextValue}>
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