import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)
  const profileImage = await screen.getByAltText(/alchemy logo/i)
  const profileName = await screen.findByText(/meet/i, { name: /name:/ }, /!/i)

  expect(profileName).toBeInTheDocument()
  expect(profileImage).toBeInTheDocument()
})
