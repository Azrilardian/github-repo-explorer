import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ReduxProvider } from '@/redux/provider'
import GlobalStyles from '@/styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ReduxProvider>
    </QueryClientProvider>
  )
}
