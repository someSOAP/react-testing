import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { commentsSelector } from '../selectors'

const CommentList: FC = () => {
    const comments = useSelector(commentsSelector)

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment}>{comment}</div>
            ))}
        </div>
    )
}

export default CommentList
