import { configureStore } from '@reduxjs/toolkit'

import errorsReducer from './features/errorsSlice'
import userSelectedReducer from './features/selectedUserSlice'
import usernameReducer from './features/usernameSlice'
import reposReducer from './features/userReposSlice'
import usersReducer from './features/usersSlice'

export const store = configureStore({
  reducer: {
    usernameReducer,
    usersReducer,
    reposReducer,
    userSelectedReducer,
    errorsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
