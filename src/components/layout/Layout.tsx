import tw from 'twin.macro'

import type { HeaderProps } from '@/src/components/combined/Header'
import type { Dispatch, SetStateAction } from 'react'

import { Header } from '@/src/components/combined/Header'

const Section = tw.section`text-sm leading-6 py-12 px-5 max-w-screen-md mx-auto`

export const Layout: React.FC<{
  user: HeaderProps['user']
  children: React.ReactNode
  setUser: Dispatch<SetStateAction<HeaderProps['user']>>
  onLogin: HeaderProps['onLogin']
  onLogout: HeaderProps['onLogout']
  onCreateAccount: HeaderProps['onCreateAccount']
}> = ({ children, user, setUser }) => {
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <Section>{children}</Section>
    </article>
  )
}
