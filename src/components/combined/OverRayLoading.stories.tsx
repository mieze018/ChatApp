import type { Meta, StoryObj } from '@storybook/react'

import { OverRayLoading } from '@/src/components/combined/OverRayLoading'

const meta: Meta<typeof OverRayLoading> = { component: OverRayLoading }

export default meta

export const Loading: StoryObj<typeof OverRayLoading> = {
  args: {},
}
export const LoadingWithProgress: StoryObj<typeof OverRayLoading> = {
  args: { progressPercentage: 50 },
}
