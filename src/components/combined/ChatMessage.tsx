import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'
import type { chatType } from '@/src/types/firebaseDB'

import { ChatMessageAvatar } from '@/src/components/combined/ChatMessageAvatar'
import { microCopies } from '@/src/libs/microCopies'

const ChatMessageWrapper = tw.div`flex gap-x-2`
const StyleChatMessageMine = tw`flex-row-reverse`
const ChatMessageText = tw.div`bg-gray-lighter rounded-3xl rounded-tl-none p-4 h-fit w-fit`
const StyleChatMessageTextMine = tw`text-white rounded-tr-none bg-secondary rounded-tl-3xl`
const ChatMessageDisplayName = tw.div`text-xs text-gray-light line-clamp-1`
const WrapperNameAndMessage = tw.div`flex flex-col`
const StyleWrapperNameAndMessage = tw`items-end`
const ChatMessageCreatedAt = tw.div`text-xs text-gray-light self-end pb-1 shrink-0 `

export const ChatMessage: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
  createdAt: chatType['createdAt']
  isMyMessage: boolean
}> = ({ message, photoURL, displayName, createdAt, isMyMessage }) => (
  <ChatMessageWrapper css={[isMyMessage && StyleChatMessageMine]}>
    <ChatMessageAvatar photoURL={photoURL} displayName={displayName} />
    <WrapperNameAndMessage css={[isMyMessage && StyleWrapperNameAndMessage]}>
      <ChatMessageDisplayName title={displayName ?? ''}>
        {displayName ?? microCopies.noName}
      </ChatMessageDisplayName>
      <ChatMessageText css={[isMyMessage && StyleChatMessageTextMine]}>{message}</ChatMessageText>
    </WrapperNameAndMessage>
    <ChatMessageCreatedAt>{createdAt}</ChatMessageCreatedAt>
  </ChatMessageWrapper>
)
