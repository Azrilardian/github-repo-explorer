import { useQuery } from 'react-query'

import { useUsername } from '@/redux/hooks/useUsername'
import searchUsers from '@/services/search-users'
import type { ApiError } from '@/types/QueryApiError'
import type { UsersType } from '@/types/Users'

const useQueryUsers = () => {
  const { username } = useUsername()

  const queryParameter = ['searchUsers', username]
  const querySettings = {
    enabled: !!username,
    onError: (error) => console.log(error.message),
  }

  const {
    isSuccess: isSearchSuccess,
    isLoading: isSearchLoading,
    isError: isSearchError,
    status: searchStatus,
    data: searchUsersData,
    error: searchError,
  } = useQuery<UsersType | ApiError>(
    queryParameter,
    () => searchUsers(username),
    querySettings
  )

  return {
    isSearchSuccess,
    isSearchLoading,
    isSearchError,
    searchStatus,
    searchUsersData,
    searchError,
  }
}

export default useQueryUsers
