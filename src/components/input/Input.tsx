import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const Input = (props) => {
  const [input, setInput] = useState('')

  const getInput = (event) => {
    const newInput = event.target.value
    setInput(newInput)
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        value={input}
        onInput={getInput}
        label="Outlined"
        variant="outlined"
      />
    </Box>
  )
}

export default Input
