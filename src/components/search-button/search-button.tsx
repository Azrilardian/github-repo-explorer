import LoadingButton from '@mui/lab/LoadingButton'
import { memo } from 'react'
import type { MouseEventHandler } from 'react'

import useQueryUsers from '@/hooks/useQueryUsers'

type ButtonProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>
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
