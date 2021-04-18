import React, { FC, ComponentType } from 'react'
import { Provider } from 'react-redux'
import store from '../reducers'

const Root: FC = ({ children }) => <Provider store={store}>{children}</Provider>

export const withRoot = <T,>(Component: ComponentType<T>) =>
    function WithRootComponent(props: T): JSX.Element {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        )
    }

export default Root
