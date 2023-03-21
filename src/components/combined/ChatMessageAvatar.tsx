import Image from 'next/image'
import tw, { styled } from 'twin.macro'

import NoUserImage from '@/public/icons/no-user-image.svg'
import { AvatarWrapper } from '@/src/components/atom/AvatarWrapper'
import { microCopies } from '@/src/libs/microCopies'

const StyleChatMessageAvatar = tw`w-12 h-12 rounded-full`

const SvgChatMessageAvatarNoImage = styled(NoUserImage)`
  ${StyleChatMessageAvatar}
`

export const ChatMessageAvatar: React.FC<{
  photoURL: string
  displayName: string
}> = ({ photoURL, displayName }) => {
  if (photoURL)
    return (
      <AvatarWrapper css={[StyleChatMessageAvatar]}>
        <Image
          src={photoURL}
          alt={displayName ?? microCopies.noName}
          sizes="80px"
          fill
          css={tw`object-cover`}
        />
      </AvatarWrapper>
    )
  return <SvgChatMessageAvatarNoImage css={[StyleChatMessageAvatar]} />
}
export type ChatMessageAvatarProps = React.ComponentProps<typeof ChatMessageAvatar>
