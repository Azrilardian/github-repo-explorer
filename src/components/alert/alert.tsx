import Alert from '@mui/material/Alert'
import React from 'react'

type AlertProps = {
  alertMessage: string
}

const BasicAlert = ({ alertMessage }: AlertProps) => (
  <Alert severity="error">{alertMessage}</Alert>
)

export default BasicAlert
