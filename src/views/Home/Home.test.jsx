import { screen, render } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const profileName = await screen.getByRole('heading', { name: /vonta/i })
  const profileMotto = await screen.getByText(/res non verba/i)
  const profileInterestsHeader = await screen.getByRole('heading', { name: /interests/i })
  const profileAvatar = await screen.getByAltText(/avatar/i)
  const profileHeaderImg = await screen.getByAltText(/header/i)

  expect(profileName).toBeInTheDocument()
  expect(profileMotto).toBeInTheDocument()
  expect(profileInterestsHeader).toBeInTheDocument()
  expect(profileAvatar).toBeInTheDocument()
  expect(profileHeaderImg).toBeInTheDocument()

  const profileInterests = await screen.findAllByRole('listitem')

  expect(profileInterests).toHaveLength(6)
})
