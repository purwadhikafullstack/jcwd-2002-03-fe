const { createSlice } = require("@reduxjs/toolkit");

const authAdminSlice = createSlice({
    name: "adminAuth",
    initialState: {
        id: "",
        name: "",
    },
    reducers: {
        loginAdmin: (state, action) => {
            return {
                state: {
                    id: action.payload.id,
                    name: action.payload.name
                }
            }
        },
        logoutAdmin: (state, action) => {
            return { state: { ...state, ...action.payload } }
        }
    }
})


export const { loginAdmin, logoutAdmin } = authAdminSlice.actions
export const selectAdminAuth = (state) => state.adminAuth
export default authAdminSlice.reducer