import React, { useState, useEffect } from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { SearchingUserInfoWrapper } from './searching-user-info.elements'
import { useUsername } from '@/redux/hooks/useUsername'

type SearchingUserInfoProps = {
  info: string
}

const SearchingUserInfo = ({ info }: SearchingUserInfoProps) => {
  const { username } = useUsername()
  const isUserExist = username.length >= 1

  return (
    isUserExist && (
      <SearchingUserInfoWrapper>
        <Typography variant="body1" gutterBottom my={2}>
          {info}
        </Typography>
        <Chip label={username} />
      </SearchingUserInfoWrapper>
    )
  )
}

export default SearchingUserInfo
