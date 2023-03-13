import tw from 'twin.macro'

import type { HeaderAppProps } from '@/src/components/combined/HeaderApp'

import { HeaderApp } from '@/src/components/combined/HeaderApp'

const WrapperApp = tw.div`
h-screen w-screen
grid [grid-template-rows: auto 1fr]
break-all text-gray-dark
`

const Main = tw.main`py-12 px-5 overflow-auto`

export const Layout: React.FC<{
  user: HeaderAppProps['user']
  children: React.ReactNode
  onLogout: HeaderAppProps['onLogout']
}> = ({ children, user, onLogout }) => {
  return (
    <WrapperApp>
      <HeaderApp user={user} onLogout={onLogout} />
      <Main>{children}</Main>
    </WrapperApp>
  )
}
