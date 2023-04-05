import { useEffect, useCallback } from 'react'
import type { SyntheticEvent } from 'react'

import UserList from '@/components/user-list/user-list'
import useQueryRepos from '@/hooks/useQueryRepos'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'
import { useUserRepos } from '@/redux/hooks/useUserRepos'
import { useUsers } from '@/redux/hooks/useUsers'
import type { UsersDataType } from '@/types/Users'

const UserLists = () => {
  const { users } = useUsers()
  const { selectedUser, dispatchSelectedUser } = useSelectedUser()
  const { isRepoSuccess, repoData } = useQueryRepos()
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

  return (
    <>
      {users.map(({ id, login }: UsersDataType) => (
        <UserList key={id} login={login} getUserRepos={getUserRepos}></UserList>
      ))}
    </>
  )
}

export default UserLists
