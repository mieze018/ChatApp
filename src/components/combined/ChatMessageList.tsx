import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'
import type { chatType } from '@/src/types/firebaseDB'

import { ChatMessageAvatar } from '@/src/components/combined/ChatMessageAvatar'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChatList = tw.div`grid gap-2`
const Message = tw.div`flex `
const MyMessage = tw(Message)`justify-end`
const OthersMessage = tw(Message)`justify-start`

export const ChatMessageList: React.FC<{
  chats: LayoutChatProps['chats']
  user: LayoutChatProps['user']
}> = ({ chats, user }) => (
  <WrapperChatList>
    {chats.map((chat, i) => {
      const { message } = chat
      const { uid, displayName, photoURL } = chat.user || {}
      const isMyMessage = uid === user.uid
      if (isMyMessage)
        return (
          <ChatMessageMine
            key={i}
            message={message}
            displayName={displayName}
            photoURL={photoURL}
          />
        )
      return (
        <ChatMessageOthers
          key={i}
          message={message}
          displayName={displayName}
          photoURL={photoURL}
        />
      )
    })}
  </WrapperChatList>
)
const ChatMessageMine: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ message, photoURL, displayName }) => (
  <MyMessage>
    <div>{displayName ?? microCopies.noName} : </div>
    <div>{message}</div>
    <ChatMessageAvatar photoURL={photoURL} displayName={displayName} />
  </MyMessage>
)
const ChatMessageOthers: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ message, photoURL, displayName }) => (
  <OthersMessage>
    <ChatMessageAvatar photoURL={photoURL} displayName={displayName} />
    <div>{displayName ?? microCopies.noName} : </div>
    <div>{message}</div>
  </OthersMessage>
)
