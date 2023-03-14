import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'

import { TextButton } from '@/src/components/atom/TextButton'
import { TextInput } from '@/src/components/atom/TextInput'

export const ChatInput: React.FC<{
  message: LayoutChatProps['message']
  setMessage: LayoutChatProps['setMessage']
  handleSendMessage: LayoutChatProps['handleSendMessage']
}> = ({ message, setMessage, handleSendMessage }) => (
  <form onSubmit={handleSendMessage}>
    <TextInput value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" />
    <TextButton type="submit">送信</TextButton>
  </form>
)
