import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { setUserRepos } from '@/redux/features/userReposSlice'

const useUserRepos = () => {
  const dispatch = useAppDispatch()
  const userRepos = useAppSelector((state) => state.reposReducer.userRepos)

  const dispatchUserRepos = (repos: any) => {
    dispatch(setUserRepos(repos))
  }

  return {
    userRepos,
    dispatchUserRepos,
  }
}

export { useUserRepos }
