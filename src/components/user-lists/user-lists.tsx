import type { SyntheticEvent } from 'react'
import { useEffect, useCallback } from 'react'
import React from 'react'

import BasicAlert from '@/components/alert/alert'
import UserList from '@/components/user-list/user-list'
import useQueryRepos from '@/hooks/useQueryRepos'
import useQueryUsers from '@/hooks/useQueryUsers'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'
import { useUserRepos } from '@/redux/hooks/useUserRepos'
import { useUsers } from '@/redux/hooks/useUsers'
import type { UsersDataType } from '@/types/Users'

const UserLists = () => {
  const { users } = useUsers()
  const { selectedUser, dispatchSelectedUser } = useSelectedUser()
  const { isRepoSuccess, repoData } = useQueryRepos()
  const { isSearchError, searchError } = useQueryUsers()
  const { dispatchUserRepos } = useUserRepos()

  useEffect(() => {
    if (selectedUser && isRepoSuccess) {
      dispatchUserRepos(repoData)
    }
  }, [selectedUser, isRepoSuccess])

  const getUserRepos = useCallback(
    (event: SyntheticEvent, login: string) => {
      event.preventDefault()
      dispatchSelectedUser(login)
    },
    [dispatchSelectedUser]
  )

  // TODO: SHOULD HANDLE OFFLINE ERROR

  if (isSearchError)
    return <BasicAlert message={searchError.message}></BasicAlert>

  return (
    <>
      {users.map(({ id, login }: UsersDataType) => (
        <UserList key={id} login={login} getUserRepos={getUserRepos}></UserList>
      ))}
    </>
  )
}

export default UserLists
