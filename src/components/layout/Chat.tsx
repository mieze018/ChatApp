import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { useSendMessageType } from '@/src/hooks/firebase/useSendMessage'

import { PageHeader } from '@/src/components/atom/PageHeader'
import { PageLoading } from '@/src/components/atom/PageLoading'
import { TextButton } from '@/src/components/atom/TextButton'
import { TextInput } from '@/src/components/atom/TextInput'
import { WrapperChat } from '@/src/components/atom/WrapperChat'

export const Chat = ({
  chats,
  isLoading,
  isBlank,
  message,
  setMessage,
  handleSendMessage,
}: {
  chats: useGetMessagesType['chats']
  isLoading: useGetMessagesType['isLoading']
  isBlank: useGetMessagesType['isBlank']
  message: useSendMessageType['message']
  setMessage: useSendMessageType['setMessage']
  handleSendMessage: useSendMessageType['handleSendMessage']
}) => {
  return (
    <WrapperChat>
      <PageHeader>Chat</PageHeader>
      <div className="grid h-full px-4 overflow-x-hidden overflow-y-auto break-all auto-rows-max">
        {isLoading && <PageLoading />}
        {isBlank && <div>初めてのチャットを投稿しましょう</div>}
        {chats.map((chat, i) => {
          if (!chat.message) return <></>
          return (
            <div key={i} className="flex">
              <div>{chat.uid}: </div>
              <div>{chat.message}</div>
            </div>
          )
        })}
      </div>

      <form onSubmit={handleSendMessage}>
        <TextInput value={message} onChange={(e) => setMessage(e.target.value)} />
        <TextButton type="submit">送信</TextButton>
      </form>
    </WrapperChat>
  )
}
