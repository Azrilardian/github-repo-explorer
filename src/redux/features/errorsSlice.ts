import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  error: {
    fetchError: '',
  },
}

const errorsSlice = createSlice({
  name: 'errorsSlice',
  initialState,
  reducers: {
    setFetchError: (state, action: PayloadAction<string>) => {
      state.error.fetchError = action.payload
    },
  },
})

export const { setFetchError } = errorsSlice.actions
export default errorsSlice.reducer
