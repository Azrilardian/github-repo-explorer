import React from 'react'

import AppInfo from '@/components/app-info/app-info'
import Form from '@/components/form/form'
import SearchingUserInfo from '@/components/searching-user-info/searching-user-info'
import UserLists from '@/components/user-lists/user-lists'

import { AppContainer } from './app.elements'

const App = () => {
  return (
    <AppContainer>
      <AppInfo></AppInfo>
      <Form></Form>
      <SearchingUserInfo></SearchingUserInfo>
      <UserLists></UserLists>
    </AppContainer>
  )
}

export default App
