import { setUsername } from '@/redux/features/usernameSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'

const useUsername = () => {
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.usernameReducer.username)

  const dispatchUsername = (newUsername: string) => {
    dispatch(setUsername(newUsername))
  }

  return {
    username,
    dispatchUsername,
  }
}

export { useUsername }
