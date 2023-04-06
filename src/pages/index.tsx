import Head from 'next/head'
import React from 'react'

import App from '@/components/app/app'

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Repo Explorer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A simple Github Repo Explorer Website Example"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Github, Website" />
        <meta name="subject" content="Github" />
        <meta name="copyright" content="Azrilardian" />
        <meta name="author" content="Azrilardian" />
        <meta name="url" content="" />
        <meta name="identifier-URL" content="" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
      </Head>
      <main>
        <App />
      </main>
    </>
  )
}
