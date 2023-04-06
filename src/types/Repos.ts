export interface ReposDataType {
  id: string
  key?: string
  name: string
  description?: string
  stargazers_count: number
  html_url: string
}

export interface ReposType {
  userRepos: ReposDataType[]
}
