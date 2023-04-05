import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { UsernameType } from '@/types/Username'

const initialState: UsernameType = {
  username: '',
}

const usernameSlice = createSlice({
  name: 'usernameSlice',
  initialState,
  reducers: {
    setUsername: (state: UsernameType, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { setUsername } = usernameSlice.actions
export default usernameSlice.reducer
