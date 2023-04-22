import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../auth"

export const Navbar = () => {
    const { authState } = useContext(AuthContext)
    // const authStatus = 'not-authenticate';
    return (
        <div className="d-flex align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company</h5>
            <div className="d-flex align-items-center">
                {
                    (authState.logged) ? (
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
