import commentsReducer, { addComment } from '../comments'

describe('Comments reducer', () => {
    it('handles actions of type "addComment"', () => {
        const action = addComment('New Comment')

        const newState = commentsReducer([], action)
        expect(newState).toEqual(['New Comment'])
    })

    it('handles actions of unknown type', () => {
        const action = {
            type: 'UNKNOWN_FAKE_ACTION',
            payload: 'FAKE_PAYLOAD',
        }

        const newState = commentsReducer([], action)
        expect(newState).toEqual([])
    })
})
