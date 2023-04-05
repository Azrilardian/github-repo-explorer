import { setSelectedUser } from '@/redux/features/selectedUserSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'

const useSelectedUser = () => {
  const dispatch = useAppDispatch()
  const selectedUser = useAppSelector(
    (state) => state.userSelectedReducer.selectedUser
  )

  const dispatchSelectedUser = (user: string) => {
    dispatch(setSelectedUser(user))
  }

  return {
    selectedUser,
    dispatchSelectedUser,
  }
}

export { useSelectedUser }
