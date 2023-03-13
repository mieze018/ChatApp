import Image from 'next/image'

import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { useSendMessageType } from '@/src/hooks/firebase/useSendMessage'

import NoUserImage from '@/public/icons/no-user-image.svg'
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
          const { message } = chat
          const { displayName, photoURL } = chat.user || {}
          const noName = 'NO NAME'
          if (!chat.message) return <></>
          return (
            <div key={i} className="flex items-center">
              <div className="w-4 h-4 border rounded-full text-gray-lighter">
                {photoURL ? (
                  <Image src={photoURL} alt={displayName ?? noName} width={16} height={16} />
                ) : (
                  <NoUserImage className="w-full h-full" />
                )}
              </div>
              <div>{displayName ?? noName} : </div>
              <div>{message}</div>
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
