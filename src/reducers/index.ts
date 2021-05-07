import {
    combineReducers,
    configureStore,
    EnhancedStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'
import reduxPromise from 'redux-promise'
import comments from './comments'

const reducer = combineReducers({
    comments,
})

export type RootState = ReturnType<typeof reducer>

const initializeStore = (
    preloadedState?: Partial<RootState>
): EnhancedStore => {
    return configureStore({
        reducer,
        preloadedState,
        middleware: [...getDefaultMiddleware(), reduxPromise],
    })
}

export default initializeStore
