import tw from 'twin.macro'

import type { authUserType } from '@/src/libs/states'

import { HeaderApp } from '@/src/components/combined/HeaderApp'

const WrapperApp = tw.div`
h-screen
grid [grid-template-rows: 65px 1fr]
break-all text-gray-800
`

const Main = tw.main`overflow-auto`

export const Layout: React.FC<{
  user: authUserType | null | undefined
  children?: React.ReactNode
  onSignOut: () => void
  isOverflowYHidden?: boolean
}> = ({ children, user, onSignOut, isOverflowYHidden = false }) => {
  return (
    <WrapperApp>
      <HeaderApp user={user} onSignOut={onSignOut} />
      <Main css={[isOverflowYHidden && tw`overflow-y-hidden`]}>{children}</Main>
    </WrapperApp>
  )
}
export type LayoutProps = React.ComponentProps<typeof Layout>
