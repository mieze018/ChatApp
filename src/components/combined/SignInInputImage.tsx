import Image from 'next/image'
import tw from 'twin.macro'

import type { imageFileType } from '@/src/libs/states'

import NoUserImageIcon from '@/public/icons/no-user-image.svg'
import { AvatarWrapper } from '@/src/components/atom/AvatarWrapper'
import { InputFile } from '@/src/components/atom/InputFIle'
import { LabelSignIn } from '@/src/components/atom/LabelSignIn'
import { microCopies } from '@/src/libs/microCopies'

const styleImage = tw`w-20 h-20 text-gray-300 rounded-full`

export const SignInInputImage: React.FC<{
  file: imageFileType | undefined
  setFile: (value: imageFileType | undefined) => void
}> = ({ file, setFile }) => (
  <LabelSignIn css={tw`grid cursor-pointer gap-y-8`}>
    {file ? (
      <AvatarWrapper css={styleImage}>
        <Image
          src={URL.createObjectURL(file)}
          alt="アップロード画像"
          fill
          sizes="80px"
          css={tw`object-cover`}
        />
      </AvatarWrapper>
    ) : (
      <NoUserImageIcon css={styleImage} />
    )}

    <InputFile accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} />
    <span className="sr-only">{microCopies.srAvatarInput}</span>
  </LabelSignIn>
)
