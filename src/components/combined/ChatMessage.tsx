import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'
import type { chatType } from '@/src/types/firebaseDB'

import { ChatMessageAvatar } from '@/src/components/combined/ChatMessageAvatar'
import { microCopies } from '@/src/libs/microCopies'

const ChatMessageWrapper = tw.div`flex gap-x-2`
const StyleChatMessageMine = tw`flex-row-reverse`
const ChatMessageText = tw.div`bg-gray-lighter rounded-3xl rounded-tl-none p-4 h-fit`
const StyleChatMessageTextMine = tw`text-white rounded-tr-none bg-secondary rounded-tl-3xl`
const ChatMessageDisplayName = tw.div`text-xs`

export const ChatMessage: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
  isMyMessage: boolean
}> = ({ message, photoURL, displayName, isMyMessage }) => (
  <ChatMessageWrapper css={[isMyMessage && StyleChatMessageMine]}>
    <ChatMessageAvatar photoURL={photoURL} displayName={displayName} />
    <div>
      <ChatMessageDisplayName>{displayName ?? microCopies.noName} : </ChatMessageDisplayName>
      <ChatMessageText css={[isMyMessage && StyleChatMessageTextMine]}>{message}</ChatMessageText>
    </div>
  </ChatMessageWrapper>
)
