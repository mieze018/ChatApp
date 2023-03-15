import { useEffect, useRef } from 'react'
import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'

import { ChatMessage } from '@/src/components/combined/ChatMessage'
import { PageLoading } from '@/src/components/combined/PageLoading'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChatList = tw.div`grid gap-4 max-w-screen-lg mx-auto py-4 px-2 md:px-4 lg:px-0`
const WrapperBlank = tw.div`text-center pt-4 text-lg font-semibold text-gray-500`

export const ChatMessageList: React.FC<{
  chats: LayoutChatProps['chats']
  user: LayoutChatProps['user']
  isLoading: LayoutChatProps['isLoading']
  isBlank: LayoutChatProps['isBlank']
}> = ({ chats, user, isLoading, isBlank }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  }, [chats])
  return (
    <WrapperChatList ref={ref}>
      {isLoading && <PageLoading />}
      {isBlank && <WrapperBlank>{microCopies.chatBlank}</WrapperBlank>}
      {!isLoading &&
        !isBlank &&
        chats.map((chat, i) => {
          const { message, createdAt } = chat
          const { uid, displayName, photoURL } = chat.user || {}
          const isMyMessage = uid === user?.uid
          return (
            <ChatMessage
              key={i}
              message={message}
              photoURL={photoURL}
              displayName={displayName}
              createdAt={createdAt}
              isMyMessage={isMyMessage}
            />
          )
        })}
    </WrapperChatList>
  )
}
