import React, { FC } from 'react'
import Root from './Root'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const App: FC = () => {
    return (
        <Root>
            <CommentBox />
            <CommentList />
        </Root>
    )
}

export default App
