import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    const authStatus = 'not-authenticate';
    return (
        <div className="d-flex align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company</h5>
            <div className="d-flex align-items-center">
                {
                    (authStatus !== 'not-authenticate') ? (
                        <>
                            <a className="btn btn-outline-danger" href="#">Salir</a>
                        </>
                    ) : (<>
                        <nav className="my-2 my-md-0 mr-md-3">
                            {/* <a className="p-2 text-dark" href="#">Registrarse</a> */}
                            <NavLink
                                className="p-2 text-darkp-2 text-dark"
                                to={'/auth/registro'}
                            >Registrarse</NavLink>
                        </nav>
                        <NavLink
                            className="btn btn-outline-primary"
                            to={'/auth/login'}
                        >Ingresar</NavLink>
                        {/* <a className="btn btn-outline-primary" href="#">Ingresar</a> */}
                    </>
                    )
                }
            </div>
        </div>
    )
}
