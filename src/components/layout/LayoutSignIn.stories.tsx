import type { Meta, StoryObj } from '@storybook/react'

import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { mockUser } from '@/src/libs/mock'

const meta: Meta<typeof LayoutSignIn> = {
  component: LayoutSignIn,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof LayoutSignIn>

export const Default: Story = {
  args: {
    user: mockUser,
    onLogout: () => null,
    setDisplayName: () => null,
    displayName: mockUser.displayName,
    setFile: () => null,
    error: null,
    progress: 0,
    isSubmitBlocked: false,
  },
}
