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
        saveComments(state, { payload }: PayloadAction<string[]>) {
            return [...state, ...payload]
        },
    },
})
// now available:
export const { addComment, saveComments } = commentsSlice.actions
export default commentsSlice.reducer
