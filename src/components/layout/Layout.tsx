import tw from 'twin.macro'

import type { HeaderAppProps } from '@/src/components/combined/HeaderApp'
import type { authUserType } from '@/src/types/firebaseDB'

import { HeaderApp } from '@/src/components/combined/HeaderApp'

const WrapperApp = tw.div`
h-screen
grid [grid-template-rows: 65px 1fr]
break-all text-gray-800
`

const Main = tw.main`overflow-auto`

export const Layout: React.FC<{
  user: Pick<authUserType, 'displayName' | 'photoURL'> | undefined
  children?: React.ReactNode
  onLogout: HeaderAppProps['onLogout']
  isOverflowYHidden?: boolean
}> = ({ children, user, onLogout, isOverflowYHidden = false }) => {
  return (
    <WrapperApp>
      <HeaderApp user={user} onLogout={onLogout} />
      <Main css={[isOverflowYHidden && tw`overflow-y-hidden`]}>{children}</Main>
    </WrapperApp>
  )
}
export type LayoutProps = React.ComponentProps<typeof Layout>
