import { useEffect, useRef } from 'react'
import tw from 'twin.macro'

import type { authUserType, chatType } from '@/src/libs/states'

import { ChatMessage } from '@/src/components/combined/ChatMessage'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChatList = tw.div`grid gap-4 max-w-screen-lg mx-auto py-4 px-2 md:px-4 lg:px-0`
const WrapperBlank = tw.div`text-center pt-4 text-lg font-semibold text-gray-500`

export const ChatMessageList: React.FC<{
  chats: chatType[] | undefined
  user: authUserType
}> = ({ chats, user }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  }, [chats])
  return (
    <WrapperChatList ref={ref}>
      {chats?.length === 0 && <WrapperBlank>{microCopies.chatBlank}</WrapperBlank>}
      {chats?.map((chat, i) => {
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
