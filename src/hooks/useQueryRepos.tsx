import { useQuery } from 'react-query'

import { useSelectedUser } from '@/redux/hooks/useSelectedUser'
import searchRepos from '@/services/search-repos'
import type { ReposDataType } from '@/types/Repos'

const useQueryRepos = () => {
  const { selectedUser } = useSelectedUser()

  const queryParameter = ['searchUserRepos', selectedUser]
  const querySettings = {
    enabled: !!selectedUser,
  }

  const {
    isSuccess: isRepoSuccess,
    isLoading: isRepoLoading,
    isError: isRepoError,
    data: repoData = [] as ReposDataType[],
    error: repoError = {} as any,
  } = useQuery<ReposDataType[]>(
    queryParameter,
    () => searchRepos(selectedUser),
    querySettings
  )

  return {
    isRepoSuccess,
    isRepoLoading,
    isRepoError,
    repoData,
    repoError,
  }
}

export default useQueryRepos
