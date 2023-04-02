import React from 'react'
import Alert from '@mui/material/Alert'

type alertProps = {
  alertMessage: string
}

const BasicAlert = ({ alertMessage }: alertProps) => (
  <Alert severity="error">This is an error alert — {alertMessage}</Alert>
)

export default BasicAlert
