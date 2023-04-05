import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import { useUsername } from '@/redux/hooks/useUsername'
import { useUsers } from '@/redux/hooks/useUsers'

import { SearchingUserInfoWrapper } from './searching-user-info.elements'

const SearchingUserInfo = () => {
  const { username } = useUsername()
  const { users } = useUsers()

  const isUserExist = users.length >= 1

  return (
    username && (
      <SearchingUserInfoWrapper>
        <Typography variant="body1" gutterBottom my={2}>
          {isUserExist ? 'Showing users for' : 'No results for'}
        </Typography>
        <Chip label={username} />
      </SearchingUserInfoWrapper>
    )
  )
}

export default SearchingUserInfo
