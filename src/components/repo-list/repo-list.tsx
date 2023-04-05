import StarIcon from '@mui/icons-material/Star'
import Typography from '@mui/material/Typography'

import type { ReposDataType } from '@/types/Repos'
import sliceWords from '@/utils/sliceWords'
import validateUrl from '@/utils/validateUrl'

import { RepoListWrapper, RepoStar } from './repo-list.elements'

const RepoList = ({
  id,
  name,
  description,
  stargazers_count,
  html_url,
}: ReposDataType) => (
  <RepoListWrapper href={validateUrl(html_url)} id={id}>
    <div>
      <Typography variant="h6">{name}</Typography>
      {description && (
        <Typography variant="body1" gutterBottom>
          {sliceWords(description)}
        </Typography>
      )}
    </div>
    <RepoStar>
      <Typography variant="body1">{stargazers_count}</Typography>
      <StarIcon></StarIcon>
    </RepoStar>
  </RepoListWrapper>
)

export default RepoList
