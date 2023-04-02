import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import searchRepos from '@/services/search-repos'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'

type SearchUsersData = {
  accountData: any[]
}

type ApiError = {
  message: string
}

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
    data: repoData,
    error: repoError,
  } = useQuery<SearchUsersData, ApiError>(
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
