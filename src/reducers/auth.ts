import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = boolean

const initialState: AuthState = false

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        changeAuth(state, { payload }: PayloadAction<boolean>) {
            return payload
        },
    },
})
// now available:
export const { changeAuth } = authSlice.actions
export default authSlice.reducer
