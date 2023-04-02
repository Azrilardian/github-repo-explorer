import React, { useRef } from 'react'
import { useUsername } from '@/redux/hooks/useUsername'

const useUsernameInput = () => {
  const { dispatchUsername } = useUsername()
  const usernameInputRef = useRef<HTMLInputElement>()

  const validateUsername = () => {
    const isUsernameEmpty = usernameInputRef.current?.value.length === 0

    return !isUsernameEmpty ? true : false
  }

  const updateUsername = () => {
    dispatchUsername(usernameInputRef.current?.value)
  }

  return {
    usernameInputRef,
    validateUsername,
    updateUsername,
  }
}

export default useUsernameInput
