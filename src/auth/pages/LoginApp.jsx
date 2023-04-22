import React from 'react'

export const LoginApp = () => {
    return (
        <>
            <form className="form-signin m-5">
                <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese</h1>
                <label htmlFor="inputEmail" className="sr-only">Correo electronico</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
            </form>
        </>
    )
}
