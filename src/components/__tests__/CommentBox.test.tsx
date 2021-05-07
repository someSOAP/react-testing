import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { withRoot } from '../Root'
import CommentBox from '../CommentBox'

const WithRootCommentBox = withRoot(CommentBox)

describe('CommentBox ', () => {
    let wrapped: ReactWrapper
    beforeEach(() => {
        wrapped = mount(<WithRootCommentBox />)
    })

    afterEach(() => {
        wrapped.unmount()
    })

    it('has a textarea', () => {
        expect(wrapped.find('textarea').length).toEqual(1)
    })

    it('has a buttons', () => {
        expect(wrapped.find('button').length).toEqual(2)
    })

    describe('textarea', () => {
        beforeEach(() => {
            wrapped
                .find('textarea')
                .simulate('change', { target: { value: 'new comment' } })
                .update()
        })

        it('is typable', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual(
                'new comment'
            )
        })

        it('gets emptied, when form is submitted', () => {
            wrapped.find('form').simulate('submit')
            wrapped.update()
            expect(wrapped.find('textarea').prop('value')).toEqual('')
        })
    })
})
