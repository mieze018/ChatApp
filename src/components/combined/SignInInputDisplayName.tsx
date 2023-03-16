import type { LayoutSignInProps } from '@/src/components/layout/LayoutSignIn'

import { LabelSignIn } from '@/src/components/atom/LabelSignIn'
import { TextInput } from '@/src/components/atom/TextInput'
import { microCopies } from '@/src/libs/microCopies'

export const SignInInputDisplayName: React.FC<
  Pick<LayoutSignInProps, 'displayName' | 'setDisplayName'>
> = ({ displayName, setDisplayName }) => (
  <LabelSignIn>
    <TextInput
      type="text"
      value={displayName}
      onChange={(e) => setDisplayName(e.target.value)}
      required
      className="p-3 mb-5 border-2 rounded outline-none w-80 focus:border-purple-700"
      placeholder={microCopies.signInDisplayNamePlaceholder}
    />
  </LabelSignIn>
)
