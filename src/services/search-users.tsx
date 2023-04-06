import type { UsersDataType } from '@/types/Users'
import octokit from '@/utils/octokit-init'

const searchUsers = async (username: string) => {
  try {
    const usersResponse = await octokit.request(`GET /search/users`, {
      q: username,
      per_page: 5,
    })

    const usersData = usersResponse.data.items

    const usersDataSliced: UsersDataType[] = usersData.map(
      ({ id, login }: UsersDataType) => {
        return {
          id,
          login,
        }
      }
    )

    return usersDataSliced
  } catch (error) {
    // return new Error(error)
    console.log(error)
    return [] as UsersDataType[]
  }
}

export default searchUsers
