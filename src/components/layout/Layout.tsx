import tw from 'twin.macro'

import type { HeaderAppProps } from '@/src/components/combined/HeaderApp'
import type { authUserType } from '@/src/types/firebaseDB'

import { HeaderApp } from '@/src/components/combined/HeaderApp'

const WrapperApp = tw.div`
h-screen w-screen
grid [grid-template-rows: auto 1fr]
break-all text-gray-dark
`

const Main = tw.main`overflow-auto`

export const Layout: React.FC<{
  user: Pick<authUserType, 'displayName' | 'photoURL'> | undefined
  children?: React.ReactNode
  onLogout: HeaderAppProps['onLogout']
}> = ({ children, user, onLogout }) => {
  return (
    <WrapperApp>
      <HeaderApp user={user} onLogout={onLogout} />
      <Main>{children}</Main>
    </WrapperApp>
  )
}
export type LayoutProps = React.ComponentProps<typeof Layout>
