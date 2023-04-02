import React from 'react'
import TextField from '@mui/material/TextField'
import { memo } from 'react'
import { useUsername } from '@/redux/hooks/useUsername'

type InputProps = {
  refName: any
}

const Input = ({ refName }: InputProps) => {
  const { username } = useUsername()

  return (
    <TextField
      inputRef={refName}
      fullWidth
      label="Github Account Name"
      variant="outlined"
      defaultValue={username}
    />
  )
}

export default memo(Input)
