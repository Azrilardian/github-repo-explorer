import React from 'react'
import AppInfo from '@/components/app-info/app-info'
import Input from '@/components/input/Input'
import SearchButton from '@/components/search-button/search-button'
import { AppContainer } from './app.elements'

const App = () => {
  const getUser = () => {
    console.log('hai')
  }

  return (
    <AppContainer>
      <AppInfo></AppInfo>
      <Input input="must-be-input" />
      <SearchButton isLoading={false} searchUser={getUser}></SearchButton>
    </AppContainer>
  )
}

export default App
