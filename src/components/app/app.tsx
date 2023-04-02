import React from 'react'
import AppInfo from '@/components/app-info/app-info'
import SearchingUserInfo from '@/components/searching-user-info/searching-user-info'
import UserLists from '@/components/user-lists/user-lists'
import { AppContainer } from './app.elements'
import { useUsers } from '@/redux/hooks/useUsers'
import Form from '@/components/form/form'

const App = () => {
  const { users } = useUsers()
  const isUserExist = users.length >= 1

  return (
    <AppContainer>
      <AppInfo></AppInfo>
      <Form></Form>
      <SearchingUserInfo
        info={isUserExist ? 'Showing users for' : 'No results for'}
      ></SearchingUserInfo>
      <UserLists></UserLists>
    </AppContainer>
  )
}

export default App
