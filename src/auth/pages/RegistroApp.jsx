export const RegistroApp = () => {

    return (
        <div className="login-form-2" style={{ backgroundColor: '#E7E9EB' }}>
            <h3 style={{ color: 'black' }} >Registro</h3>
            <form>
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="email"
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
                        type="password"
                        className="form-control"
                        placeholder="Repita la contraseña"
                    />
                </div>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Estudiante
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Moderador
                        </label>
                    </div>
                </div>

                <div className="form-group mb-2">
                    <input
                        type="submit"
                        className="btnSubmit"
                        value="Crear cuenta" />
                </div>
            </form>
        </div>
    )
}
