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
      photoURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nOXSzyqEURjH8Q9xARakXIHsJ8otWNixV/7UZMuCJsWsrWYv1hbchVnLBUhqsFOjMHrrTL3xDvOMdxbyq2d1fuf7recc/luOcDgs+AI6aeaHITjLCU7Lhk+hnRO8YLpMwX4O3p29suBjuC0Q3GE8AprBKqo4QAPnaBbAu9NMnUa6U02MjPUlN9+AOsG5LhLUSxTUe61pG2+/AL+j9tNbLON5AHgbK/0+eAX3AfgDFgWzFBBk3XB2A4KdQQSXAcFFFD6Cx4DgCaMRwVwBpIW1NK2C8+xO39n49LdPMJk7n8AxXnO99YhgK126Sl+2Vyqpk3U3I4Jsn7N97jXS/YP5AB/luaLoTDvsAAAAAElFTkSuQmCC',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: undefined,
  },
}
