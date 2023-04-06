import Typography from '@mui/material/Typography'
import { memo } from 'react'
import React from 'react'

const AppInfo = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom fontSize={30} fontWeight={500}>
        GITHUB REPO EXPLORER
      </Typography>
      <Typography variant="body1" gutterBottom mb={5}>
        Search your favourite github repo
      </Typography>
    </>
  )
}

export default memo(AppInfo)
