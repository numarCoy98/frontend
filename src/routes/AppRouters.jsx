import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginApp, RegistroApp } from '../auth/pages';
import { StreamApp } from '../stream/pages/StreamApp';

export const AppRouters = () => {
    const authStatus = 'not-authenticate';
    // const authStatus = 'authenticate';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticate') ?
                    <Route path='/auth/*' element={<LoginApp />} /> :
                    <Route path='/*' element={<StreamApp />} />
            }
            <Route path='/*' element={<Navigate to="/auth/login" />}></Route>
            <Route path='/auth/registro' element={<RegistroApp />}></Route>
        </Routes>
    )
}
