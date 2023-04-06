import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { UsersType, UsersDataType } from '@/types/Users'

const initialState: UsersType = {
  users: [],
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state: UsersType, action: PayloadAction<UsersDataType[]>) => {
      state.users = action.payload
    },
    resetUsers: (state: UsersType) => {
      state.users = initialState.users
    },
  },
})

export const { setUsers, resetUsers } = usersSlice.actions
export default usersSlice.reducer
