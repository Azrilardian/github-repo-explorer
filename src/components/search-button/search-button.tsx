import type { MouseEventHandler } from 'react'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

type ButtonProps = {
  isLoading: boolean
  searchUser: MouseEventHandler<HTMLButtonElement>
}

const SearchButton = (props: ButtonProps) => {
  const { isLoading, searchUser } = props

  return (
    <LoadingButton
      fullWidth
      sx={{ margin: '1rem 0' }}
      variant="contained"
      size="large"
      loading={isLoading}
      onClick={searchUser}
    >
      Search
    </LoadingButton>
  )
}

export default SearchButton
