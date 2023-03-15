import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'

import { Button } from '@/src/components/atom/Button'
import { TextInput } from '@/src/components/atom/TextInput'

const Wrapper = tw.div`
h-full w-full 
border-t border-gray-lighter 
py-2 px-2 md:px-4 lg:px-0`

const FormSendMessage = tw.form`
grid gap-x-2  [grid-template-columns: 1fr max-content] items-center 
w-full max-w-screen-lg 
mx-auto
`

export const ChatInput: React.FC<{
  message: LayoutChatProps['message']
  setMessage: LayoutChatProps['setMessage']
  handleSendMessage: LayoutChatProps['handleSendMessage']
}> = ({ message, setMessage, handleSendMessage }) => (
  <Wrapper>
    <FormSendMessage onSubmit={handleSendMessage}>
      <TextInput
        value={message ?? ''}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete="off"
      />
      <Button type="submit">送信</Button>
    </FormSendMessage>
  </Wrapper>
)
