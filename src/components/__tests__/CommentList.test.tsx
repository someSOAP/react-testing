import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import CommentList from '../CommentList'
import { withRoot } from '../Root'
import { RootState } from '../../reducers'

const WithRootCommentList = withRoot(CommentList)

describe('CommentList', () => {
    let stateIterator = 0
    const statesArray: Partial<RootState>[] = [{ comments: ['mem', 'kek', 'foo'] }]
    let wrapped: ReactWrapper

    beforeEach(() => {
        wrapped = mount(
            <WithRootCommentList initialState={statesArray[stateIterator]} />
        )
        stateIterator++
    })

    it('creates one <li> pre comment', () => {
        expect(wrapped.find('li').length).toBe(3)
    })
})
