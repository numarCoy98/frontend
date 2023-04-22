export const Navbar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company</h5>
            <div className="d-flex align-items-center">
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#">Registrarse</a>
                </nav>
                <a className="btn btn-outline-primary" href="#">Ingresar</a>
            </div>
        </div>
    )
}
