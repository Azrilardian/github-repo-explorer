import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { SelectedUserType } from '@/types/SelectedUser'

const initialState: SelectedUserType = {
  selectedUser: '',
}

const selectedUserSlice = createSlice({
  name: 'selectedUserSlice',
  initialState,
  reducers: {
    setSelectedUser: (
      state: SelectedUserType,
      action: PayloadAction<string>
    ) => {
      state.selectedUser = action.payload
    },
  },
})

export const { setSelectedUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer
