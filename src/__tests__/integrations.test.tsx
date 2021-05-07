import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import moxios from 'moxios'
import { withRoot } from '../components/Root'
import App from '../components/App'

const WithRootApp = withRoot(App)

describe('Integrations tests', () => {
    let wrapped: ReactWrapper
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [
                {
                    name: 'FETCHED 1',
                },
                {
                    name: 'FETCHED 2',
                },
                {
                    name: 'FETCHED 3',
                },
            ],
        })
        wrapped = mount(<WithRootApp />)
    })

    afterEach(() => {
        wrapped.unmount()
        moxios.uninstall()
    })

    it('can fetch comments and display them', (done) => {
        wrapped.find('.fetch-comments').simulate('click')

        moxios.wait(() => {
            wrapped.update()
            expect(wrapped.find('li').length).toEqual(3)
            done()
        })
    })
})
