import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { ChatMessage } from '@/src/components/combined/ChatMessage'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChatList = tw.div`grid gap-2 max-w-screen-lg mx-auto py-4 px-2 md:px-4 lg:px-0`
const WrapperBlank = tw.div``

export const ChatMessageList: React.FC<{
  chats: LayoutChatProps['chats']
  user: LayoutChatProps['user']
  isLoading: LayoutChatProps['isLoading']
  isBlank: LayoutChatProps['isBlank']
}> = ({ chats, user, isLoading, isBlank }) => (
  <WrapperChatList>
    {isLoading && <PageLoading />}
    {isBlank && <WrapperBlank>{microCopies.chatBlank}</WrapperBlank>}
    {!isLoading &&
      !isBlank &&
      chats.map((chat, i) => {
        const { message } = chat
        const { uid, displayName, photoURL } = chat.user || {}
        const isMyMessage = uid === user.uid
        return (
          <ChatMessage
            key={i}
            message={message}
            photoURL={photoURL}
            displayName={displayName}
            isMyMessage={isMyMessage}
          />
        )
      })}
  </WrapperChatList>
)
