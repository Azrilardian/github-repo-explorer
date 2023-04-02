import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import searchUsers from '@/services/search-users'
import { useUsername } from '@/redux/hooks/useUsername'

type SearchUsersData = {
  accountData: any[]
}

type ApiError = {
  message: string
}

const useQueryUsers = () => {
  const { username } = useUsername()

  const queryParameter = ['searchUser', username]
  const querySettings = {
    enabled: !!username,
  }

  const {
    isSuccess: isSearchSuccess,
    isLoading: isSearchLoading,
    isError: isSearchError,
    data: searchUsersData,
    error: searchError,
  } = useQuery<SearchUsersData, ApiError>(
    queryParameter,
    () => searchUsers(username),
    querySettings
  )

  return {
    isSearchSuccess,
    isSearchError,
    isSearchLoading,
    searchError,
    searchUsersData,
  }
}

export default useQueryUsers
