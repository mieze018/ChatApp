import type { Meta, StoryObj } from '@storybook/react'

import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { mockChats, mockUser } from '@/src/libs/mock'

const meta: Meta<typeof LayoutSignIn> = {
  component: LayoutSignIn,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof LayoutSignIn>

export const Default: Story = {
  args: {
    user: mockUser,
    chats: mockChats,
    isLoading: false,
    isBlank: false,
    message: '',
    setMessage: () => null,
    handleSendMessage: () => new Promise(() => null),
  },
}
