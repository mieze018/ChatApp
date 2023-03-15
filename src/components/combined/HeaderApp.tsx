import Image from 'next/image'
import React from 'react'
import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'

import ChatIcon from '@/public/icons/chat-bubble-lef-right.svg'
import { AvatarWrapper } from '@/src/components/atom/AvatarWrapper'
import { Button } from '@/src/components/atom/Button'

const Header = tw.header`flex gap-x-4 items-center justify-between px-5 py-4 border-b border-black/20 h-fit`
const HeaderTitle = tw.h1`font-bold text-xl leading-none inline-block`
const WrapperInnerHeader = tw.div`flex gap-x-2 items-center shrink-0`
const UserWrapper = tw.span`text-sm flex items-center  gap-x-2`
const DisplayName = tw.div`text-sm font-semibold line-clamp-1 max-w-prose`

export const HeaderApp = ({
  user,
  onLogout,
}: {
  user: LayoutProps['user']
  onLogout: () => void
}) => (
  <Header>
    <WrapperInnerHeader>
      <ChatIcon css={tw`w-8 h-8 text-primary`} />
      <HeaderTitle>SimpleChat</HeaderTitle>
    </WrapperInnerHeader>
    <WrapperInnerHeader css={tw`shrink`}>
      {user && (
        <>
          <UserWrapper>
            <DisplayName title={user.displayName ?? ''}>{user.displayName}</DisplayName>
            <AvatarWrapper>
              <Image
                src={user.photoURL || '/icons/no-user-image.svg'}
                alt="ユーザーアイコン"
                fill
                sizes="64px"
              />
            </AvatarWrapper>
          </UserWrapper>
          <Button variant="secondary" size="small" onClick={onLogout}>
            ログアウト
          </Button>
        </>
      )}
    </WrapperInnerHeader>
  </Header>
)
export type HeaderAppProps = React.ComponentProps<typeof HeaderApp>
