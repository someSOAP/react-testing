import commentsReducer, { addComment } from '../comments'

it('handles actions of type "addComment"', () => {
    const action = addComment('New Comment')

    const newState = commentsReducer([], action)
    expect(newState).toEqual(['New Comment'])
})
