import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './features/usernameSlice'
import usersReducer from './features/usersSlice'
import reposReducer from './features/userReposSlice'
import userSelectedReducer from './features/selectedUserSlice'

export const store = configureStore({
  reducer: {
    usernameReducer,
    usersReducer,
    reposReducer,
    userSelectedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
