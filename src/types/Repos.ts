export interface ReposDataType {
  id: number
  key?: number
  name: string
  description?: string
  stargazers_count: number
  html_url: string
}

export interface ReposType {
  userRepos: ReposDataType[]
}
