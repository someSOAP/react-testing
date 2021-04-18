import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CommentsState = string[]

const initialState: CommentsState = []

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        addComment(state, { payload }: PayloadAction<string>) {
            return [...state, payload]
        },
    },
})
// now available:
export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
