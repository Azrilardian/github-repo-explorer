import { setUserRepos, resetUserRepos } from '@/redux/features/userReposSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import type { ReposDataType } from '@/types/Repos'

const useUserRepos = () => {
  const dispatch = useAppDispatch()
  const userRepos = useAppSelector((state) => state.reposReducer.userRepos)

  const dispatchUserRepos = (repos: ReposDataType[]) => {
    dispatch(setUserRepos(repos))
  }

  const dispatchResetUserRepos = () => {
    dispatch(resetUserRepos())
  }

  return {
    userRepos,
    dispatchUserRepos,
    dispatchResetUserRepos,
  }
}

export { useUserRepos }
