import React, { FC, ComponentType } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import initializeStore, { RootState } from '../reducers'

interface IRootProps {
    initialState?: Partial<RootState>
}

const Root: FC<IRootProps> = ({ children, initialState = {} }) => (
    <Provider store={initializeStore(initialState)}>
        <BrowserRouter>{children}</BrowserRouter>
    </Provider>
)

export const withRoot = <T,>(
    Component: ComponentType<T>,
    initialState?: Partial<RootState>
): FC<T & IRootProps> => {
    const WithRootComponent: FC<T & IRootProps> = (props) => {
        return (
            <Root initialState={props.initialState || initialState}>
                <Component {...props} />
            </Root>
        )
    }
    return WithRootComponent
}

export default Root
