import LoadingButton from '@mui/lab/LoadingButton'
import { memo } from 'react'
import type { MouseEventHandler } from 'react'

import useQueryUsers from '@/hooks/useQueryUsers'

type ButtonProps = {
  updateUsername: MouseEventHandler<HTMLButtonElement>
}

const SearchButton = ({ updateUsername }: ButtonProps) => {
  const { isSearchLoading } = useQueryUsers()

  return (
    <div>
      <LoadingButton
        fullWidth
        sx={{ margin: '1rem 0' }}
        variant="contained"
        size="large"
        onClick={updateUsername}
        loading={isSearchLoading}
      >
        Search
      </LoadingButton>
    </div>
  )
}

export default memo(SearchButton)
