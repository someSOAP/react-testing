import { createSelector } from 'reselect'
import { RootState } from '../reducers'

const rootSelector = (state: RootState) => state

export const commentsSelector = createSelector(
    rootSelector,
    (state) => state.comments
)
