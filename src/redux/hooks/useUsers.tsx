import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { changeUsers } from '@/redux/features/usersSlice'

const useUsers = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.usersReducer.users)

  const dispatchUsers = (newUsers: any) => {
    dispatch(changeUsers(newUsers))
  }

  return {
    users,
    dispatchUsers,
  }
}

export { useUsers }
