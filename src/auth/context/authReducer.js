import { types } from "../types/types"

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                user: action.payload
            }

        case type.logout:
            return {
                logged: false,
                name: action.payload
            }

        default:
            return state
    }
}