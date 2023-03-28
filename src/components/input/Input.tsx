import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useCallback, memo } from 'react'
import type { ChangeEvent } from 'react'

type InputProps = {
  input: string
}

const Input = (props: InputProps) => {
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
        label="Github Account Name"
        variant="outlined"
      />
    </Box>
  )
}

export default memo(Input)
