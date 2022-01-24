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

  // can destructure...
  //
  const { name, motto, likes } = user

  const profileName = await screen.getByRole('heading', { name: name })
  // ONLY NEED ONE AWAIT - PROFILE HAS ALREADY BEEN FETCHED
  const profileMotto = screen.getByText(motto)
  const profileInterestsHeader = screen.getByRole('heading', { name: /interests/i })
  const profileAvatar = screen.getByAltText(/avatar/i)
  const profileHeaderImg = screen.getByAltText(/header/i)

  expect(profileName).toBeInTheDocument()
  expect(profileMotto).toBeInTheDocument()
  expect(profileInterestsHeader).toBeInTheDocument()
  expect(profileAvatar).toBeInTheDocument()
  expect(profileHeaderImg).toBeInTheDocument()

  const profileInterests = await screen.findAllByRole('listitem')

  expect(profileInterests).toHaveLength(likes.length)
})
