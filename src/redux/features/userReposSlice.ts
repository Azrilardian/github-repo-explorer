import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ReposType } from '@/types/Repos'

const initialState: ReposType = {
  userRepos: [],
}

const userReposSlice = createSlice({
  name: 'userReposSlice',
  initialState,
  reducers: {
    setUserRepos: (state: ReposType, action: PayloadAction<any>) => {
      state.userRepos = action.payload
    },
  },
})

export const { setUserRepos } = userReposSlice.actions
export default userReposSlice.reducer
