import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type UsersState = {
  users: any
}

const initialState = {
  users: [],
} as UsersState

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    changeUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload
    },
  },
})

export const { changeUsers } = usersSlice.actions
export default usersSlice.reducer
