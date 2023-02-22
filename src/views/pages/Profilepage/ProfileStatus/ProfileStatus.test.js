/* eslint-disable testing-library/await-async-query */
import { render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import { ProfileStatus } from './ProfileStatus'

describe('testing users profile status', () => {
   // Smoke tests
   it('renders correctly', () => {
      render(<ProfileStatus status={'test'} />)
   })
   it('renders status correctly', () => {
      const mounted = renderer.create(<ProfileStatus status={'test'} />)
      expect(mounted.toTree().props.status).toBe('test')
   })

   // Testing other functions
   test('after creation <span> should be displayed', () => {
      const component = renderer.create(<ProfileStatus status='test' />)
      const root = component.root
      const span = root.findByType('p')
      expect(span).not.toBeNull()
   })

	test("after creation <input> shouldn't be displayed", () => {
      const component = renderer.create(<ProfileStatus status='test' />)
      const root = component.root
      expect(() => {
         root.findByType('input')
      }).toThrow()
   })
})







