import Image from 'next/image'
import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { useSendMessageType } from '@/src/hooks/firebase/useSendMessage'
import type { authUserType, chatType } from '@/src/types/firebaseDB'

import NoUserImage from '@/public/icons/no-user-image.svg'
import { AvatarWrapper } from '@/src/components/atom/AvatarWrapper'
import { PageLoading } from '@/src/components/atom/PageLoading'
import { TextButton } from '@/src/components/atom/TextButton'
import { TextInput } from '@/src/components/atom/TextInput'
import { Layout } from '@/src/components/layout/Layout'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChat = tw.div` h-full w-full
grid items-center justify-center [grid-template-rows: max-content 1fr max-content]
 content-between`
const WrapperChatList = tw.div`grid gap-2`
const WrapperBlank = tw.div``
const Message = tw.div`flex `
const MyMessage = tw(Message)`justify-end`
const OthersMessage = tw(Message)`justify-start`

export const LayoutChat: React.FC<
  LayoutProps & {
    user: authUserType
    chats: chatType[]
    isLoading: useGetMessagesType['isLoading']
    isBlank: useGetMessagesType['isBlank']
    message: useSendMessageType['message']
    setMessage: useSendMessageType['setMessage']
    handleSendMessage: useSendMessageType['handleSendMessage']
  }
> = ({ user, onLogout, chats, isLoading, isBlank, message, setMessage, handleSendMessage }) => (
  <Layout
    user={{ displayName: user?.displayName ?? '', photoURL: user?.photoURL ?? '' }}
    onLogout={onLogout}
  >
    <WrapperChat>
      {isLoading && <PageLoading />}
      {isBlank && <WrapperBlank>{microCopies.chatBlank}</WrapperBlank>}
      {!isBlank && <ChatList chats={chats} user={user} />}
      <ChatInput message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </WrapperChat>
  </Layout>
)
type LayoutChatProps = React.ComponentProps<typeof LayoutChat>

const ChatList: React.FC<{
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

const ChatInput: React.FC<{
  message: LayoutChatProps['message']
  setMessage: LayoutChatProps['setMessage']
  handleSendMessage: LayoutChatProps['handleSendMessage']
}> = ({ message, setMessage, handleSendMessage }) => (
  <form onSubmit={handleSendMessage}>
    <TextInput value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" />
    <TextButton type="submit">送信</TextButton>
  </form>
)
const ChatMessageMine: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ message, photoURL, displayName }) => (
  <MyMessage>
    <div>{displayName ?? microCopies.noName} : </div>
    <div>{message}</div>
    <MessageAvatar photoURL={photoURL} displayName={displayName} />
  </MyMessage>
)
const ChatMessageOthers: React.FC<{
  message: LayoutChatProps['message']
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ message, photoURL, displayName }) => (
  <OthersMessage>
    <MessageAvatar photoURL={photoURL} displayName={displayName} />
    <div>{displayName ?? microCopies.noName} : </div>
    <div>{message}</div>
  </OthersMessage>
)
const MessageAvatar: React.FC<{
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ photoURL, displayName }) => (
  <AvatarWrapper>
    {photoURL ? (
      <Image src={photoURL} alt={displayName ?? microCopies.noName} width={32} height={32} />
    ) : (
      <NoUserImage className="w-full h-full" />
    )}
  </AvatarWrapper>
)
