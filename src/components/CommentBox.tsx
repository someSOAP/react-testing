import React, { FC } from 'react'

const CommentBox: FC = () => {
    return (
        <form>
            <h4>Add a Comment</h4>
            <textarea/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    )
}

export default CommentBox
