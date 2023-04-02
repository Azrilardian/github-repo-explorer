import octokit from '@/utils/octokit-init'

const searchRepos = async (userSelected: string) => {
  try {
    const repoResponse = await octokit.request(
      `GET /users/${userSelected}/repos`
    )

    const repoData = repoResponse.data

    return repoData
  } catch (error: any) {
    return new Error(error)
  }
}

export default searchRepos
