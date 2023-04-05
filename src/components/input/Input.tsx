import TextField from '@mui/material/TextField'
import type { RefObject } from 'react'
import { memo } from 'react'

import { useUsername } from '@/redux/hooks/useUsername'

type InputProps = {
  inputRefName: RefObject<HTMLInputElement>
}

const Input = ({ inputRefName }: InputProps) => {
  const { username } = useUsername()

  return (
    <TextField
      inputRef={inputRefName}
      fullWidth
      label="Github Account Name"
      variant="outlined"
      defaultValue={username}
    />
  )
}

export default memo(Input)
