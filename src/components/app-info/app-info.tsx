import React, { memo } from 'react'
import Typography from '@mui/material/Typography'

const AppInfo = () => (
  <>
    <Typography variant="h1" gutterBottom fontSize={30} fontWeight={500}>
      GITHUB REPO EXPLORER
    </Typography>
    <Typography variant="body1" gutterBottom mb={5}>
      Search your favourite github repo
    </Typography>
  </>
)

export default memo(AppInfo)
