import tw from 'twin.macro'

import type { LayoutSignInProps } from '@/src/components/layout/LayoutSignIn'

import NoUserImageIcon from '@/public/icons/no-user-image.svg'
import { InputFile } from '@/src/components/atom/InputFIle'
import { LabelSignIn } from '@/src/components/atom/LabelSignIn'
import { microCopies } from '@/src/libs/microCopies'

export const SignInInputImage: React.FC<Pick<LayoutSignInProps, 'setFile'>> = ({ setFile }) => (
  <LabelSignIn css={tw`cursor-pointer`}>
    {/* TODO: アップロード画像のプレビュー表示 */}
    <NoUserImageIcon css={tw`w-20 h-20 mb-2 text-gray-light`} />

    <InputFile accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} />
    <span className="sr-only t-2">{microCopies.srAvatarInput}</span>
  </LabelSignIn>
)
