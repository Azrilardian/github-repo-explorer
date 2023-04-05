import type { ReposType, ReposDataType } from '@/types/Repos'
import octokit from '@/utils/octokit-init'

const searchRepos = async (userSelected: string) => {
  try {
    const reposResponse = await octokit.request(
      `GET /users/${userSelected}/repos`
    )

    const reposData = reposResponse.data

    const reposDataSliced: ReposType = reposData.map(
      ({
        id,
        name,
        description,
        stargazers_count,
        html_url,
      }: ReposDataType) => {
        return {
          id,
          name,
          description,
          stargazers_count,
          html_url,
        }
      }
    )

    return reposDataSliced
  } catch (error: Error) {
    return new Error(error)
  }
}

export default searchRepos
