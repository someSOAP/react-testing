import {
    combineReducers,
    configureStore,
    EnhancedStore,
} from '@reduxjs/toolkit'

import comments from './comments'
import auth from './auth'

const reducer = combineReducers({
    comments,
    auth,
})

export type RootState = ReturnType<typeof reducer>

const initializeStore = (
    preloadedState?: Partial<RootState>
): EnhancedStore => {
    return configureStore({
        reducer,
        preloadedState,
    })
}

export default initializeStore
