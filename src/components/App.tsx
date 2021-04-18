import React, { FC } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const App: FC = () => {
    return (
        <>
            <CommentBox />
            <CommentList />
        </>
    )
}

export default App
