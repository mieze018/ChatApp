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
      displayName: 'ほげーた',
      photoURL: 'https://source.unsplash.com/random/100x100',
    },
  },
}

export const LoggedOut: Story = {}
