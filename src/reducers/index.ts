import {
    combineReducers,
    configureStore,
    EnhancedStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'
import asyncMiddleware from './middlewares/async'

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
        middleware: [...getDefaultMiddleware(), asyncMiddleware],
    })
}

export default initializeStore
