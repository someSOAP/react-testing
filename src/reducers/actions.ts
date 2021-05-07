import axios from 'axios'
import { ThunkAction } from '@reduxjs/toolkit'
import { saveComments } from './comments'

export const fetchComments = (): ThunkAction<any, any, any, any> => async (
    dispatch
) => {
    const response = await axios.get<{ name: string }[]>(
        'http://jsonplaceholder.typicode.com/comments'
    )
    dispatch(saveComments(response.data.map((comment) => comment.name)))
}
