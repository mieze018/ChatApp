import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/src/components/atom/Button'

const meta: Meta<typeof Button> = { component: Button }

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
}

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
}
export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
}
