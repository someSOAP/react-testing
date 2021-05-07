import React, { FC, ComponentType, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../reducers'

const withAuth = (ChildComponent: ComponentType): ComponentType<any> => {
    const WithAuthComponent: FC<RouteComponentProps> = ({ history }) => {
        const auth = useSelector((state: RootState) => state.auth)

        useEffect(() => {
            if (!auth) {
                history.push('/')
            }
        })

        return <ChildComponent />
    }

    return WithAuthComponent
}

export default withAuth
