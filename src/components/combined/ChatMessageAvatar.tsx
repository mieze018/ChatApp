import Image from 'next/image'
import tw, { styled } from 'twin.macro'

import type { chatType } from '@/src/types/firebaseDB'

import NoUserImage from '@/public/icons/no-user-image.svg'
import { microCopies } from '@/src/libs/microCopies'

const StyleChatMessageAvatar = tw`w-12 h-12 rounded-full`
const ImageChatMessageAvatar = styled(Image)`
  ${StyleChatMessageAvatar}
`
const SvgChatMessageAvatarNoImage = styled(NoUserImage)`
  ${StyleChatMessageAvatar}
`
export const ChatMessageAvatar: React.FC<{
  photoURL: chatType['user']['photoURL']
  displayName: chatType['user']['displayName']
}> = ({ photoURL, displayName }) => {
  if (photoURL)
    return (
      <ImageChatMessageAvatar
        src={photoURL}
        alt={displayName ?? microCopies.noName}
        width={48} //w-12
        height={48} //h-12
      />
    )
  return <SvgChatMessageAvatarNoImage />
}
