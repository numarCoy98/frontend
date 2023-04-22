import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../auth';
import { LoginApp, RegistroApp } from '../auth/pages';
import { StreamApp } from '../stream/pages/StreamApp';

export const AppRouters = () => {

    const { authState } = useContext(AuthContext)
    const authStatus = true;
    // const authStatus = 'authenticate';
    return (
        <Routes>
            {
                (authState.logged) ?
                    <Route path='/*' element={<StreamApp />} /> :
                    <Route path='/auth/*' element={<LoginApp />} />
            }
            <Route path='/*' element={<Navigate to="/auth/login" />}></Route>
            <Route path='/auth/registro' element={<RegistroApp />}></Route>
        </Routes>
    )
}
