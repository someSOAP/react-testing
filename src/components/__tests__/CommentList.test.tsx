import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import CommentList from '../CommentList'
import { withRoot } from '../Root'
import { RootState } from '../../reducers'

const WithRootCommentList = withRoot(CommentList)

describe('CommentList', () => {
    const statesArray: Partial<RootState>[] = [
        { comments: ['mem', 'kek', 'foo'] },
        { comments: ['mem', 'kek', 'foo'] },
    ]

    let stateIterator = 0
    let currentState = statesArray[stateIterator]
    let wrapped: ReactWrapper

    beforeEach(() => {
        currentState = statesArray[stateIterator]
        wrapped = mount(<WithRootCommentList initialState={currentState} />)
        stateIterator = stateIterator + 1
    })

    it('creates one <li> pre comment', () => {
        expect(wrapped.find('li').length).toBe(3)
    })

    it('shows the text for each comment', () => {
        currentState.comments?.forEach((comment) => {
            expect(wrapped.render().text()).toContain(comment)
        })
    })
})
