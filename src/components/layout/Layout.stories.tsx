import { within, userEvent } from '@storybook/testing-library'

import type { Meta, StoryObj } from '@storybook/react'

import { LoggedIn as HeaderLoggedIn } from '@/src/components/combined/HeaderApp.stories'
import { Layout } from '@/src/components/layout/Layout'

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>
const Contents = () => (
  <>
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        &quot;args&quot; of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at{' '}
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the{' '}
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
        docs
      </a>
      .
    </p>
    <div className="tip-wrapper">
      <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999"
          />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </>
)
export const LoggedIn: Story = {
  args: {
    ...HeaderLoggedIn.args,
    children: <Contents />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /ログアウト/i,
    })
    await userEvent.click(loginButton)
  },
}
export const LoggedOut: Story = {
  args: {
    ...LoggedIn.args,
    user: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /ログイン/i,
    })
    await userEvent.click(loginButton)
  },
}
