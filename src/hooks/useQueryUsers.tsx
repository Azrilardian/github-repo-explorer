import { useQuery } from 'react-query'

import { useUsername } from '@/redux/hooks/useUsername'
import searchUsers from '@/services/search-users'
import type { UsersDataType } from '@/types/Users'

const useQueryUsers = () => {
  const { username } = useUsername()

  const queryParameter = ['searchUsers', username]
  const querySettings = {
    enabled: !!username,
  }

  const {
    isSuccess: isSearchSuccess,
    isLoading: isSearchLoading,
    isError: isSearchError,
    status: searchStatus,
    data: searchUsersData = [] as UsersDataType[],
    error: searchError = {} as any,
  } = useQuery<UsersDataType[]>(
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
