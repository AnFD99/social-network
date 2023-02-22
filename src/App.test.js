import { render, screen } from '@testing-library/react'
import Homepage from 'views/pages/Homepage/Homepage'

test('renders learn react link', () => {
   render(<Homepage />)
   const linkElement = screen.getByText('Homepage')
   expect(linkElement).toBeInTheDocument()
})

