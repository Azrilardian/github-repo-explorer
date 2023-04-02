import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { setSelectedUser } from '@/redux/features/selectedUserSlice'

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
