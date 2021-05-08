import { Middleware } from 'redux'

const asyncMiddleware: Middleware = ({ dispatch, getState }) => {
    return (next) => {
        return (action) => {
            debugger
            console.log(action)
            next(action)
        }
    }
}

export default asyncMiddleware
