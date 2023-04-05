import TextareaAutoSize from 'react-textarea-autosize'
import tw from 'twin.macro'

import type { errorType, handleSendMessageType, messageType } from '@/src/libs/states'

import SendIcon from '@/public/icons/send.svg'
import { Button } from '@/src/components/atom/Button'
import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'

const Wrapper = tw.div`
h-full w-full 
border-t border-gray-500
py-4 px-2 md:px-4 lg:px-0
grid gap-y-2
`

const FormSendMessage = tw.form`
grid gap-x-3 [grid-template-columns: 1fr max-content] items-end
w-full max-w-screen-lg 
mx-auto
`
const TextareaAutoSizeMessage = tw(TextareaAutoSize)`
p-3 rounded-md border border-gray-700 
focus:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
max-h-[min(50vh,calc(100vh-16rem))]
`

export const ChatInput: React.FC<{
  message: messageType
  setMessage: (value: messageType) => void
  handleSendMessage: handleSendMessageType
  error: errorType
}> = ({ message, setMessage, handleSendMessage, error }) => (
  <Wrapper>
    <FormSendMessage onSubmit={handleSendMessage}>
      <TextareaAutoSizeMessage
        value={message ?? ''}
        onChange={(e) => setMessage(e.target.value)}
        autoFocus
      />
      <Button type="submit" css={tw`w-12 h-12 p-2 rounded-full`} disabled={!message}>
        <SendIcon />
      </Button>
    </FormSendMessage>
    {error && <ErrorWrapper css={tw`w-full max-w-screen-lg mx-auto`}>{error.message}</ErrorWrapper>}
  </Wrapper>
)
