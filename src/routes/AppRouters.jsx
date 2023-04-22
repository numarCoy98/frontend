import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginApp } from '../auth/pages/LoginApp';
import { StreamApp } from '../stream/pages/StreamApp';

export const AppRouters = () => {
    const authStatus = 'not-authenticate';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticate') ?
                    <Route path='/auth/*' element={<LoginApp />} /> :
                    <Route path='/*' element={<StreamApp />} />
            }

            <Route path='/*' element={<Navigate to="/auth/login" />}></Route>
        </Routes>
    )
}
