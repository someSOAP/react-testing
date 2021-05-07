import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { withRoot } from './Root'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import { changeAuth } from '../reducers/auth'

import { RootState } from '../reducers'

const App: FC = () => {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const toggleAuth = () => dispatch(changeAuth(!auth))

    const renderButton = () => {
        return (
            <button onClick={toggleAuth}>{auth ? 'LOG OUT' : 'LOG IN'}</button>
        )
    }

    const renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/post">post</Link>
                </li>
                <li>{renderButton()}</li>
            </ul>
        )
    }

    return (
        <>
            {renderHeader()}
            <Route path="/" exact component={CommentList} />
            <Route path="/post" component={CommentBox} />
        </>
    )
}

export default withRoot(App)
