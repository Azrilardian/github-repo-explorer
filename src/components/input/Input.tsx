import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useCallback, memo } from 'react'
import type { ChangeEvent, FC } from 'react'

interface InputProps {
  input: string
}

const Input: FC<InputProps> = (props) => {
  const [input, setInput] = useState('')

  const getInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newInput = event.target.value
      setInput(newInput)
    },
    [setInput]
  )

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        value={input}
        onInput={getInput}
        label="Outlined"
        variant="outlined"
      />
    </Box>
  )
}

export default memo(Input)
