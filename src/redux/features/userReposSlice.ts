import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ReposType, ReposDataType } from '@/types/Repos'

const initialState: ReposType = {
  userRepos: [],
}

const userReposSlice = createSlice({
  name: 'userReposSlice',
  initialState,
  reducers: {
    setUserRepos: (
      state: ReposType,
      action: PayloadAction<ReposDataType[]>
    ) => {
      state.userRepos = action.payload
    },
    resetUserRepos: (state: ReposType) => {
      state.userRepos = initialState.userRepos
    },
  },
})

export const { setUserRepos, resetUserRepos } = userReposSlice.actions
export default userReposSlice.reducer
