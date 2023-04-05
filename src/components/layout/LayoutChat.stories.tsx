import type { Meta, StoryObj } from '@storybook/react'

import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { mockChats, mockUser3 } from '@/src/libs/mock'

const meta: Meta<typeof LayoutChat> = {
  component: LayoutChat,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof LayoutChat>

export const Default: Story = {
  args: {
    user: mockUser3,
    chats: mockChats,
    message: '',
    setMessage: () => null,
    handleSendMessage: () => new Promise(() => null),
  },
}
export const Blank: Story = {
  args: {
    ...Default.args,
    chats: [],
  },
}
export const OnError: Story = {
  args: {
    ...Default.args,
    error: {
      code: 'error',
      message: 'error',
    },
  },
}
