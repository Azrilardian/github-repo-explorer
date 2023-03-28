import React from 'react'
import Input from '@/components/input/Input'
import AppInfo from '@/components/app-info/app-info'
import { AppContainer } from './app.elements'

const App = () => (
  <AppContainer>
    <AppInfo></AppInfo>
    <Input input="must-be-input" />
  </AppContainer>
)

export default App
