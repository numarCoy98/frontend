import React from 'react';
import './loginApp.css';

export const LoginApp = () => {
    return (
        <div className="login-container">
            <div className="">
                <div className="login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
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