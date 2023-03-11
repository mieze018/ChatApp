import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { RecoilRoot } from 'recoil'

export const decoratorsComponent = (Story) => (
  <RecoilRoot>
    <GlobalStyles />
    <Story />
  </RecoilRoot>
)
