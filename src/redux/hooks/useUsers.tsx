import { setUsers, resetUsers } from '@/redux/features/usersSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import type { UsersDataType } from '@/types/Users'

const useUsers = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.usersReducer.users)

  const dispatchUsers = (newUsers: UsersDataType[]) => {
    dispatch(setUsers(newUsers))
  }

  const dispatchResetUsers = () => dispatch(resetUsers())

  return {
    users,
    dispatchUsers,
    dispatchResetUsers,
  }
}

export { useUsers }
