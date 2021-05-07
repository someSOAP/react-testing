import React, { useState, FC, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../reducers/comments'
import { fetchComments } from '../reducers/actions'
import withAuth from './withAuth'

const CommentBox: FC = () => {
    const dispatch = useDispatch()

    const [value, updateValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        updateValue(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(addComment(value))
        updateValue('')
    }

    const onFetchComments = () => {
        dispatch(fetchComments())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={value} onChange={handleChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={onFetchComments}>
                Fetch Comments
            </button>
        </div>
    )
}

export default withAuth(CommentBox)
