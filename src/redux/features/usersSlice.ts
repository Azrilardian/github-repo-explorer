import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { UsersType } from '@/types/Users'

const initialState: UsersType = {
  users: [],
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state: UsersType, action: PayloadAction<any>) => {
      state.users = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer
