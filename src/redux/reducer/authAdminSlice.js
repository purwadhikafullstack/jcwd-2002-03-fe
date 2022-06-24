/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    id: "",
    name: "",
    role: ""
}

const authAdminSlice = createSlice({
    name: "authAdmin",
    initialState,
    reducers: {
        loginAdmin: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.role = action.payload.role
        },
        logoutAdmin: () => {
            return initialState
        },
    },
})


export const { loginAdmin, logoutAdmin } = authAdminSlice.actions
export const selectAdminAuth = (state) => state.adminAuth
export default authAdminSlice.reducer