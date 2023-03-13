import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.primary`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
)

export default GlobalStyles
