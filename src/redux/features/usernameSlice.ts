import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type UsernameState = {
  username: string
}

const initialState = {
  username: '',
} as UsernameState

const usernameSlice = createSlice({
  name: 'usernameSlice',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { changeUsername } = usernameSlice.actions
export default usernameSlice.reducer
