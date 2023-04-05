import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import type { MouseEventHandler } from 'react'
import type { SyntheticEvent } from 'react'

import RepoList from '@/components/repo-list/repo-list'
import useQueryRepos from '@/hooks/useQueryRepos'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'
import { useUserRepos } from '@/redux/hooks/useUserRepos'
import type { ReposDataType } from '@/types/Repos'

type UserListProps = {
  key?: number
  login: string
  getUserRepos: MouseEventHandler<HTMLButtonElement>
}

const UserList = ({ login, getUserRepos }: UserListProps) => {
  const { userRepos } = useUserRepos()
  const { isRepoLoading } = useQueryRepos()
  const { selectedUser } = useSelectedUser()

  return (
    <Accordion
      sx={{ marginBottom: '10px' }}
      expanded={selectedUser === login}
      onChange={(event: SyntheticEvent) => getUserRepos(event, login)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${login}-content`}
        id={`${login}-header`}
      >
        <Typography variant="body1">{login}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isRepoLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress size={20} />
          </Box>
        ) : (
          selectedUser === login &&
          userRepos.map(
            ({
              id,
              name,
              description,
              stargazers_count,
              html_url,
            }: ReposDataType) => (
              <RepoList
                html_url={html_url}
                key={id}
                id={id}
                name={name}
                description={description}
                stargazers_count={stargazers_count}
              ></RepoList>
            )
          )
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default UserList
