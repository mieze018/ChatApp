import { within, userEvent } from '@storybook/testing-library'

import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from '@/src/components/layout/Layout'
import { mockSentenceLongEnglish, mockUser } from '@/src/libs/mock'

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>
const Contents = () => <div className="px-5 py-12">{mockSentenceLongEnglish}</div>

export const LoggedIn: Story = {
  args: {
    user: mockUser,
    children: <Contents />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /サインアウト/i,
    })
    await userEvent.click(loginButton)
  },
}
export const LoggedOut: Story = {
  args: {
    ...LoggedIn.args,
    user: undefined,
  },
}
