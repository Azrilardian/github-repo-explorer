import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type SelectedUserState = {
  selectedUser: string
}

const initialState = {
  selectedUser: '',
} as SelectedUserState

const selectedUserSlice = createSlice({
  name: 'selectedUserSlice',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload
    },
  },
})

export const { setSelectedUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer
