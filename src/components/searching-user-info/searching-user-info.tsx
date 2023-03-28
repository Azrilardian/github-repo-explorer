import React from 'react'
import Typography from '@mui/material/Typography'

type SearchingUserInfoProps = {
  name: string
}

const SearchingUserInfo = (props: SearchingUserInfoProps) => {
  const { name } = props

  return (
    <>
      <Typography variant="body1" gutterBottom my={2}>
        Showing users for &quot;{name}&quot;
      </Typography>
    </>
  )
}

export default SearchingUserInfo
