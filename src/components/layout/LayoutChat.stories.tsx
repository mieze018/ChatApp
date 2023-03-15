import type { Meta, StoryObj } from '@storybook/react'

import { LoggedIn } from '@/src/components/combined/HeaderApp.stories'
import { LayoutChat } from '@/src/components/layout/LayoutChat'

const meta: Meta<typeof LayoutChat> = {
  component: LayoutChat,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof LayoutChat>

export const Default: Story = {
  args: {
    ...LoggedIn.args,
    chats: [
      {
        message: 'てすと',
        user: {
          displayName: 'てすと',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f730874f-8c1e-483d-aefe-b6c1fbb0be3f',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
      {
        message: 'aa',
        user: {
          displayName: 'user_uid',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f30a6b1f-4d81-40db-8378-4712ae939907',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
      {
        message: 'dfcdsvbaevdcsbanklbredvhgjcbakxlcsjd ghanjxszdv nackl,b sdnkma,',
        user: {
          displayName: 'user_uid',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f30a6b1f-4d81-40db-8378-4712ae939907',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
      {
        message: 'jdcl;',
        user: {
          displayName: 'なまえ',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FYl4WMueC7fPJOTydpXAoW0cfkN32%2FphotoURL.png?alt=media&token=3226eb7a-07b1-48e1-aad6-34076d752485',
          uid: 'Yl4WMueC7fPJOTydpXAoW0cfkN32',
        },
      },
      {
        message: 'こんにちは',
        user: {
          displayName: 'なまえ',
          photoURL: '',
          uid: 'Yl4WMueC7fPJOTydpXAoW0cfkN32',
        },
      },
      {
        message: 'こんばんは',
        user: {
          displayName: 'mnbdfg',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FYl4WMueC7fPJOTydpXAoW0cfkN32%2FphotoURL.png?alt=media&token=7358e785-03c7-440a-9530-3c08e451b2d7',
          uid: 'Yl4WMueC7fPJOTydpXAoW0cfkN32',
        },
      },
      {
        message: 'てすと',
        user: {
          displayName: 'てすと',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f730874f-8c1e-483d-aefe-b6c1fbb0be3f',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
      {
        message: 'aa',
        user: {
          displayName: 'user_uid',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f30a6b1f-4d81-40db-8378-4712ae939907',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
      {
        message: 'dfcdsvbaevdcsbanklbredvhgjcbakxlcsjd ghanjxszdv nackl,b sdnkma,',
        user: {
          displayName: 'user_uid',
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/chatapp-1f82e.appspot.com/o/user%2FeUnnNX1sdMN2o5YWXcAgckwp2Nx1%2FphotoURL.png?alt=media&token=f30a6b1f-4d81-40db-8378-4712ae939907',
          uid: 'eUnnNX1sdMN2o5YWXcAgckwp2Nx1',
        },
      },
    ],
    isLoading: false,
    isBlank: false,
    message: '',
    setMessage: () => null,
    handleSendMessage: () => new Promise(() => null),
  },
}
export const Blank: Story = {
  args: {
    ...Default.args,
    isBlank: true,
  },
}
