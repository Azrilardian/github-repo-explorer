import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import App from '@/components/app/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Form from '@/components/form/form'
import { ReduxProvider } from '@/redux/provider'

const queryClient = new QueryClient()

// describe('Home', () => {
//   it('renders app on initial load', () => {
//     render(<App />)

//     expect(screen.getByTestId('app')).toBeInTheDocument()
//   })
// })

// Untuk saat ini, kemungkinan twin.macro dengan jest masih mengalami error, dan setelah saya menelesurinya, sepertinya ini memang bug dari twin.macro, referensi
// https
// https
// https

describe('Home', () => {
  it('renders Form on initial load', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReduxProvider>
          <Form></Form>
        </ReduxProvider>
      </QueryClientProvider>
    )

    expect(screen.getByTestId('form')).toBeInTheDocument()
  })
})
