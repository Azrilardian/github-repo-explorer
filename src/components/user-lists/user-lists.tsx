import { useEffect } from 'react'
import UserList from '@/components/user-list/user-list'
import { useUsers } from '@/redux/hooks/useUsers'
import useQueryRepos from '@/hooks/useQueryRepos'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'
import { useUserRepos } from '@/redux/hooks/useUserRepos'

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

  const handleGetUserRepos = (event: any, login: string) => {
    event.preventDefault()

    dispatchSelectedUser(login)
  }

  return (
    <>
      {users.map(({ id, login }) => (
        <UserList
          key={id}
          login={login}
          handleChange={handleGetUserRepos}
        ></UserList>
      ))}
    </>
  )
}

export default UserLists
