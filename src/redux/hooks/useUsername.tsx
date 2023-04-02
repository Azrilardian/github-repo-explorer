import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { changeUsername } from '@/redux/features/usernameSlice'

const useUsername = () => {
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.usernameReducer.username)

  const dispatchUsername = (newUsername: string) => {
    dispatch(changeUsername(newUsername))
  }

  return {
    username,
    dispatchUsername,
  }
}

export { useUsername }
