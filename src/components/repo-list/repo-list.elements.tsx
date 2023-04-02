import React from 'react'
import tw, { styled } from 'twin.macro'

const RepoListWrapper = styled.a`
  ${tw`flex justify-between bg-slate-100 p-3 text-inherit no-underline mb-2`}
`

const RepoStar = styled.div`
  ${tw`flex gap-1 mt-1`}
`

export { RepoListWrapper, RepoStar }
