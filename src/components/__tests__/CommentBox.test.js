import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'


describe('CommentBox ', () => {

    let wrapped
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

    it('has a typable textarea', () => {
        wrapped.find('textarea').simulate('change', { target: { value: 'new comment' } })
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

})
