import Box from '@mui/material/Box'
import { useEffect, useRef, useMemo, memo, useCallback } from 'react'
import type { SyntheticEvent, MutableRefObject } from 'react'

import Input from '@/components/input/Input'
import SearchButton from '@/components/search-button/search-button'
import useQueryUsers from '@/hooks/useQueryUsers'
import { useUsername } from '@/redux/hooks/useUsername'
import { useUsers } from '@/redux/hooks/useUsers'

const Form = () => {
  const { dispatchUsername } = useUsername()
  const { dispatchUsers, dispatchResetUsers } = useUsers()
  const { isSearchSuccess, searchUsersData } = useQueryUsers()
  const usernameInputRef = useRef() as MutableRefObject<HTMLInputElement>

  const searchUsersDataMemo = useMemo(() => {
    return { ...searchUsersData }
  }, [searchUsersData])

  useEffect(() => {
    if (isSearchSuccess) {
      dispatchUsers(searchUsersData)
    } else {
      dispatchResetUsers()
    }
  }, [isSearchSuccess, searchUsersDataMemo])

  const updateUsername = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault()

      dispatchUsername(usernameInputRef.current?.value)
    },
    [dispatchUsername]
  )

  return (
    <Box
      component="form"
      data-testid="form"
      noValidate
      autoComplete="off"
      onSubmit={updateUsername}
    >
      <Input inputRefName={usernameInputRef} />
      <SearchButton updateUsername={updateUsername}></SearchButton>
    </Box>
  )
}

export default memo(Form)
