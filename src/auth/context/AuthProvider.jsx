import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types";
import { useFetch } from "../../hooks";
import chatApi from "../../../api/chatApi";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);
    const onLogin = async (email, password) => {
        try {
            const { data } = await chatApi.post('/auth', { email, password })
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('token', data.token)
            const action = {
                type: types.login,
                payload: data
            }
            dispatch(action)

        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <AuthContext.Provider value={{ onLogin, authState }}>
            {children}
        </AuthContext.Provider>
    )
}
