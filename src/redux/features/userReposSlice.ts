import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type ReposState = {
  userRepos: any
}

const initialState = {
  userRepos: [],
} as ReposState

const userReposSlice = createSlice({
  name: 'userReposSlice',
  initialState,
  reducers: {
    setUserRepos: (state, action: PayloadAction<any>) => {
      state.userRepos = action.payload
    },
  },
})

export const { setUserRepos } = userReposSlice.actions
export default userReposSlice.reducer
