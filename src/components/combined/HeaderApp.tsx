import React from 'react'
import tw from 'twin.macro'

import ChatIcon from '@/public/icons/chat-bubble-lef-right.svg'
import { Button } from '@/src/components/atom/Button'

const Header = tw.header`flex items-center justify-between px-5 py-4 border-b border-black/20 h-fit`
const HeaderTitle = tw.h1`font-bold text-xl leading-none inline-block`
const WrapperInnerHeader = tw.div`flex gap-x-2 items-center`
const User = tw.span`text-sm`

export const HeaderApp = ({
  user,
  onLogout,
}: {
  user: { displayName: string } | undefined
  onLogout: () => void
}) => (
  <Header>
    <WrapperInnerHeader>
      <ChatIcon tw="w-8 h-8 text-primary" />
      <HeaderTitle>SimpleChat</HeaderTitle>
    </WrapperInnerHeader>
    <WrapperInnerHeader>
      {user && (
        <>
          <User>
            Welcome, <b>{user.displayName}</b>!
          </User>
          <Button size="small" onClick={onLogout}>
            ログアウト
          </Button>
        </>
      )}
    </WrapperInnerHeader>
  </Header>
)
export type HeaderAppProps = React.ComponentProps<typeof HeaderApp>
