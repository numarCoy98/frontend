import React from 'react';
import { useForm } from '../../hooks';
import './loginApp.css';

export const LoginApp = () => {

    const { state, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = state

    // const handleLogin

    return (
        <div className="login-container">
            <div className="">
                <div className="login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input
                                value={email}
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                value={password}
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={onInputChange}
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