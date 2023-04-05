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
    setDisplayName: () => null,
    displayName: '',
    setFile: () => null,
    error: null,
    progress: 0,
    isSignUpSubmitBlocked: false,
  },
}
export const OnError: Story = {
  args: {
    ...Default.args,
    error: {
      message: 'エラーが発生しました',
    },
  },
}
export const OnLoading: Story = {
  args: {
    ...Default.args,
    isSignUpSubmitBlocked: true,
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
    isSignUpSubmitBlocked: true,
  },
  render: (args) => (
    <>
      <LayoutSignIn {...args} /> <OverRayLoading progressPercentage={args.progress} />
    </>
  ),
}
