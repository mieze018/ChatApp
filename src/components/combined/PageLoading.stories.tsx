import type { Meta, StoryObj } from '@storybook/react'

import { PageLoading } from '@/src/components/combined/PageLoading'

const meta: Meta<typeof PageLoading> = {
  component: PageLoading,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
