import { Navbar } from "./components/Navbar"
import { LoginApp } from "./auth/pages/LoginApp"
import { StreamApp } from "./stream/pages/StreamApp"
import { BrowserRouter } from "react-router-dom"
import { AppRouters } from "./routes/AppRouters"

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouters />
            {/* <LoginApp /> */}
        </BrowserRouter>
    )
}
