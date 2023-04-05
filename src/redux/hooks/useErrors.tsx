import { setFetchError } from '@/redux/features/errorsSlice'

import { useAppSelector, useAppDispatch } from './hooks'

const useErrors = () => {
  const dispatch = useAppDispatch()
  const fetchError = useAppSelector(
    (state) => state.errorsReducer.error.fetchError
  )

  const dispatchFetchError = (error: string) => {
    dispatch(setFetchError(error))
  }

  return {
    fetchError,
    dispatchFetchError,
  }
}

export default useErrors
