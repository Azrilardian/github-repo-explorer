import React from 'react'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { RepoListWrapper, RepoStar } from './repo-list.elements'
import sliceWords from '@/utils/sliceWords'

type RepoListProps = {
  name: string
  description: string
  star: string
  link: string
}

const RepoList = ({ name, description, star, link }: RepoListProps) => (
  <RepoListWrapper href={link}>
    <div>
      <Typography variant="h6">{name}</Typography>
      {description && (
        <Typography variant="body1" gutterBottom>
          {sliceWords(description)}
        </Typography>
      )}
    </div>
    <RepoStar>
      <Typography variant="body1">{star}</Typography>
      <StarIcon></StarIcon>
    </RepoStar>
  </RepoListWrapper>
)

export default RepoList
