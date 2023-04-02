import React, { memo } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import useQueryUsers from '@/hooks/useQueryUsers'

type ButtonProps = {
  handleClick: any
}

const SearchButton = ({ handleClick }: ButtonProps) => {
  const { isSearchLoading } = useQueryUsers()

  return (
    <div>
      <LoadingButton
        fullWidth
        sx={{ margin: '1rem 0' }}
        variant="contained"
        size="large"
        onClick={handleClick}
        loading={isSearchLoading}
      >
        Search
      </LoadingButton>
    </div>
  )
}

export default memo(SearchButton)
