import Alert from '@mui/material/Alert'
import { memo } from 'react'

type AlertProps = {
  message: string
}

const BasicAlert = ({ message }: AlertProps) => (
  <Alert severity="error">{message}</Alert>
)

export default memo(BasicAlert)
