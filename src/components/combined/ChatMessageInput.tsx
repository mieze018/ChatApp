import TextareaAutoSize from 'react-textarea-autosize'
import tw from 'twin.macro'

import type { LayoutChatProps } from '@/src/components/layout/LayoutChat'

import { Button } from '@/src/components/atom/Button'

const Wrapper = tw.div`
h-full w-full 
border-t border-gray-lighter 
py-2 px-2 md:px-4 lg:px-0
`

const FormSendMessage = tw.form`
grid gap-x-2  [grid-template-columns: 1fr max-content] items-end
w-full max-w-screen-lg 
mx-auto
`
const TextareaAutoSizeMessage = tw(TextareaAutoSize)`
p-3 rounded-md border border-gray 
focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
max-h-[min(50vh,calc(100vh-16rem))]
`

export const ChatInput: React.FC<{
  message: LayoutChatProps['message']
  setMessage: LayoutChatProps['setMessage']
  handleSendMessage: LayoutChatProps['handleSendMessage']
}> = ({ message, setMessage, handleSendMessage }) => (
  <Wrapper>
    <FormSendMessage onSubmit={handleSendMessage}>
      <TextareaAutoSizeMessage
        value={message ?? ''}
        onChange={(e) => setMessage(e.target.value)}
        autoFocus
      />
      <Button type="submit">送信</Button>
    </FormSendMessage>
  </Wrapper>
)
