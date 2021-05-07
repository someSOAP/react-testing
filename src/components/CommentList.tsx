import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { commentsSelector } from '../selectors'

const renderComments = (comments: string[]) =>
    comments.map((comment) => <li key={comment}>{comment}</li>)

const CommentList: FC = () => {
    const comments = useSelector(commentsSelector)

    return (
        <div>
            <h4>Comments List</h4>
            <ul>{renderComments(comments)}</ul>
        </div>
    )
}

export default CommentList
