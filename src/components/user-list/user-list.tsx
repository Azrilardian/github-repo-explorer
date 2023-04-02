import Accordion from '@mui/material/Accordion'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RepoList from '@/components/repo-list/repo-list'
import { useUserRepos } from '@/redux/hooks/useUserRepos'
import useQueryRepos from '@/hooks/useQueryRepos'
import { useSelectedUser } from '@/redux/hooks/useSelectedUser'

type UserListProps = {
  login: string
  expanded: any
  handleChange: any
}

const UserList = ({ login, handleChange }: UserListProps) => {
  const { userRepos } = useUserRepos()
  const { isRepoLoading } = useQueryRepos()
  const { selectedUser } = useSelectedUser()

  return (
    <Accordion
      sx={{ marginBottom: '10px' }}
      expanded={selectedUser === login}
      onChange={(event) => handleChange(event, login)}
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
            ({ id, name, description, stargazers_count, html_url }) => (
              <RepoList
                link={html_url}
                key={id}
                name={name}
                description={description}
                star={stargazers_count}
              ></RepoList>
            )
          )
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default UserList
