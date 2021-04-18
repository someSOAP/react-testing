import { mount, ReactWrapper } from 'enzyme'
import CommentBox from '../CommentBox'

describe('CommentBox ', () => {
    let wrapped: ReactWrapper
    beforeEach(() => {
        wrapped = mount(<CommentBox />)
    })

    afterEach(() => {
        wrapped.unmount()
    })

    it('has a textarea', () => {
        expect(wrapped.find('textarea').length).toEqual(1)
    })

    it('has a button', () => {
        expect(wrapped.find('button').length).toEqual(1)
    })

    describe('textarea', () => {
        beforeEach(() => {
            wrapped
                .find('textarea')
                .simulate('change', { target: { value: 'new comment' } })
            wrapped.update()
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
