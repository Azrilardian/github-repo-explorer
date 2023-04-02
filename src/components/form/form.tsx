'use client'

import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Input from '@/components/input/Input'
import useQueryUsers from '@/hooks/useQueryUsers'
import useUsernameInput from '@/hooks/useUsernameInput'
import SearchButton from '@/components/search-button/search-button'
import BasicAlert from '@/components/alert/alert'
import { useUsername } from '@/redux/hooks/useUsername'
import { useUsers } from '@/redux/hooks/useUsers'

const Form = () => {
  const { username } = useUsername()
  const { dispatchUsers } = useUsers()
  const { validateUsername, updateUsername, usernameInputRef } =
    useUsernameInput()
  const { isSearchSuccess, isSearchError, searchError, searchUsersData } =
    useQueryUsers()

  useEffect(() => {
    if (username && isSearchSuccess) {
      dispatchUsers(searchUsersData)
    }
  }, [username, isSearchSuccess])

  const handleChangeUsername = (event: any) => {
    event.preventDefault()

    const isUsernameValid = validateUsername()

    if (isUsernameValid) {
      updateUsername()
    }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleChangeUsername}
    >
      <Input refName={usernameInputRef} />
      <SearchButton handleClick={handleChangeUsername}></SearchButton>
      {isSearchError && (
        <BasicAlert alertMessage={searchError?.message}></BasicAlert>
      )}
    </Box>
  )
}

export default Form
