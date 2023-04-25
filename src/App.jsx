import { Navbar } from "./components/Navbar"
import { LoginApp } from "./auth/pages/LoginApp"
import { StreamApp } from "./stream/pages/StreamApp"
import { BrowserRouter } from "react-router-dom"
import { AppRouters } from "./routes/AppRouters"
import { AuthProvider } from "./auth"

// import io from "socket.io-client";
// import { getEnvVariables } from "../helpers/getEnvVariables"


export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <AppRouters />
                {/* <LoginApp /> */}
            </BrowserRouter>
        </AuthProvider>
    )
}
