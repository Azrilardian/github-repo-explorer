import useErrors from '@/redux/hooks/useErrors'
import type { UsersType, UsersDataType } from '@/types/Users'
import octokit from '@/utils/octokit-init'

const searchUsers = async (username: string) => {
  try {
    const usersResponse = await octokit.request(`GET /search/users`, {
      q: username,
      per_page: 5,
    })

    const usersData = usersResponse.data.items

    const usersDataSliced: UsersType = usersData.map(
      ({ id, login }: UsersDataType) => {
        return {
          id,
          login,
        }
      }
    )

    return usersDataSliced
  } catch (error: Error) {
    return new Error(error)
  }
}

export default searchUsers
