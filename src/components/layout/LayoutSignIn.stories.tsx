import type { Meta, StoryObj } from '@storybook/react'

import { OverRayLoading } from '@/src/components/combined/OverRayLoading'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'

const meta: Meta<typeof LayoutSignIn> = {
  component: LayoutSignIn,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof LayoutSignIn>

export const Default: Story = {
  args: {
    user: undefined,
    onLogout: () => null,
    setDisplayName: () => null,
    displayName: '',
    setFile: () => null,
    error: null,
    progress: 0,
    isSubmitBlocked: false,
  },
}
export const OnError: Story = {
  args: {
    ...Default.args,
    error: {
      name: 'Error',
      message: 'エラーが発生しました',
      code: 'auth/unknown',
    },
  },
}
export const OnLoading: Story = {
  args: {
    ...Default.args,
    isSubmitBlocked: true,
  },
  render: (args) => (
    <>
      <LayoutSignIn {...args} /> <OverRayLoading />
    </>
  ),
}
export const OnProgress: Story = {
  args: {
    ...Default.args,
    progress: 50,
    isSubmitBlocked: true,
  },
  render: (args) => (
    <>
      <LayoutSignIn {...args} /> <OverRayLoading progressPercentage={args.progress} />
    </>
  ),
}