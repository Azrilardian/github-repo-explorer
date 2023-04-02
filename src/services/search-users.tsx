import React from 'react'
import octokit from '@/utils/octokit-init'

const searchUsers = async (username: string) => {
  try {
    const accountResponse = await octokit.request(`GET /search/users`, {
      q: username,
      per_page: 5,
    })

    const accountData = accountResponse.data.items

    return accountData
  } catch (error: any) {
    return new Error(error.message)
  }
}

export default searchUsers
