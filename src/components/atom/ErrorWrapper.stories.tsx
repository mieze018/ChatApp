import type { Meta, StoryObj } from '@storybook/react'

import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'

const meta: Meta<typeof ErrorWrapper> = { component: ErrorWrapper }

export default meta

export const Default: StoryObj<typeof ErrorWrapper> = {
  args: { children: 'エラーが発生しました' },
}
