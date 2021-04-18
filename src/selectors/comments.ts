import { createSelector } from 'reselect'
import { RootState } from '../reducers'

const rootSelector = (state: RootState) => state

export const commentsState = createSelector(
    rootSelector,
    (state) => state.comments
)
