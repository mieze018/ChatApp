import type { Meta, StoryObj } from '@storybook/react'

import { HeaderApp } from '@/src/components/combined/HeaderApp'

const meta: Meta<typeof HeaderApp> = {
  component: HeaderApp,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeaderApp>

export const LoggedIn: Story = {
  args: {
    user: {
      displayName: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {}
