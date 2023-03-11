import { within, userEvent } from '@storybook/testing-library'

import type { Meta, StoryObj } from '@storybook/react'

import { Page } from '@/src/components/layout/Page'

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Page>

export const LoggedOut: Story = {}

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /ログイン/i,
    })
    await userEvent.click(loginButton)
  },
}
