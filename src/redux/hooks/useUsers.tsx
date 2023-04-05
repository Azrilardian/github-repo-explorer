import { setUsers } from '@/redux/features/usersSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import type { UsersType } from '@/types/Users'

const useUsers = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.usersReducer.users)

  const dispatchUsers = (newUsers: UsersType) => {
    dispatch(setUsers(newUsers))
  }

  return {
    users,
    dispatchUsers,
  }
}

export { useUsers }
