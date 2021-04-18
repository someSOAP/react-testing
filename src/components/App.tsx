import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from '../reducers'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const App: FC = () => {
    return (
        <Provider store={store}>
            <CommentBox />
            <CommentList />
        </Provider>
    )
}

export default App
