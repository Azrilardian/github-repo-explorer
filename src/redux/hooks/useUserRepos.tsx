import { setUserRepos } from '@/redux/features/userReposSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import type { ReposType } from '@/types/Repos'

const useUserRepos = () => {
  const dispatch = useAppDispatch()
  const userRepos = useAppSelector((state) => state.reposReducer.userRepos)

  const dispatchUserRepos = (repos: ReposType) => {
    dispatch(setUserRepos(repos))
  }

  return {
    userRepos,
    dispatchUserRepos,
  }
}

export { useUserRepos }