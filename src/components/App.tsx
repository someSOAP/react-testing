import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Root from './Root'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const App: FC = () => {
    return (
        <Root>
            <ul>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/post">post</a>
                </li>
            </ul>
            <BrowserRouter>
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </BrowserRouter>
        </Root>
    )
}

export default App
