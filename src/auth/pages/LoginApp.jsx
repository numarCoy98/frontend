import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import './loginApp.css';
import Swal from 'sweetalert2'
import { AuthContext } from '../context';

export const LoginApp = () => {

    const { onLogin } = useContext(AuthContext)
    const { state, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = state

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanEmail = email.trim()
        const isPassword = password.length >= 6

        if (cleanEmail && isPassword) {
            onLogin(email, password)
            onResetForm()
        }
        else {
            Swal.fire({
                icon: 'error',
                text: 'la contraseña o el correo estan incorrectos',
            })
        }
    }

    return (
        <div className="login-container">
            <div className="">
                <div className="login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-2">
                            <input
                                value={email}
                                name='email'
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                value={password}
                                name='password'
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}