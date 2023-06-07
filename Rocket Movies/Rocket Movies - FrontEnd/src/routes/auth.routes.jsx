import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
        </Routes>
    )
}
// Routes vai envolver todas as rotas
// Para cada route eu digo qual o endereço '/' e qual elemento renderizar(exibir) 'Home'.
