import React, { useState, FC, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../reducers'
import { addComment } from '../reducers/comments'

const CommentBox: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [value, updateValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        updateValue(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(addComment(value))
        updateValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={value} onChange={handleChange} />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    )
}

export default CommentBox
