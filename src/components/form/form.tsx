import Box from '@mui/material/Box'
import { useEffect, useRef } from 'react'
import type { SyntheticEvent } from 'react'

import Input from '@/components/input/Input'
import SearchButton from '@/components/search-button/search-button'
import useQueryUsers from '@/hooks/useQueryUsers'
import { useUsername } from '@/redux/hooks/useUsername'
import { useUsers } from '@/redux/hooks/useUsers'

const Form = () => {
  const { dispatchUsername } = useUsername()
  const { dispatchUsers } = useUsers()
  const { isSearchSuccess, searchUsersData } = useQueryUsers()
  const usernameInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (isSearchSuccess) {
      dispatchUsers(searchUsersData)
    } else {
      dispatchUsers([])
    }
  }, [isSearchSuccess])

  const handleUpdateUsername = (event: SyntheticEvent) => {
    event.preventDefault()

    dispatchUsername(usernameInputRef.current?.value)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleUpdateUsername}
    >
      <Input inputRefName={usernameInputRef} />
      <SearchButton handleClick={handleUpdateUsername}></SearchButton>
    </Box>
  )
}

export default Form
