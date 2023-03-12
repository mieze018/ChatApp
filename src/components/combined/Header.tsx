import React from 'react'
import tw from 'twin.macro'

import { Button } from '@/src/components/atom/Button'

const WrapperHeader = tw.div`flex items-center justify-between px-5 py-4 border-b border-gray-lighter`
const HeaderLogo = tw.svg`w-8 h-8 inline-block`
const HeaderTitle = tw.h1`font-bold text-xl leading-none inline-block`
const WrapperInnerHeader = tw.div`flex gap-x-2 items-center`
const User = tw.span`text-sm`

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: {
  user?: { name: string } | undefined
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}) => (
  <header>
    <WrapperHeader>
      <WrapperInnerHeader>
        <HeaderLogo viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </HeaderLogo>
        <HeaderTitle>Acme</HeaderTitle>
      </WrapperInnerHeader>
      <WrapperInnerHeader>
        {user ? (
          <>
            <User>
              Welcome, <b>{user.name}</b>!
            </User>
            <Button size="small" onClick={onLogout}>
              ログアウト
            </Button>
          </>
        ) : (
          <>
            <Button size="small" variant="secondary" onClick={onLogin}>
              ログイン
            </Button>
            <Button size="small" onClick={onCreateAccount}>
              登録
            </Button>
          </>
        )}
      </WrapperInnerHeader>
    </WrapperHeader>
  </header>
)
export type HeaderProps = React.ComponentProps<typeof Header>
