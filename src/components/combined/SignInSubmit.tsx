import tw from 'twin.macro'

import { Button } from '@/src/components/atom/Button'
import { microCopies } from '@/src/libs/microCopies'

const ButtonWrapper = tw.div`grid items-center gap-1 justify-items-center`

export const SignInSubmit: React.FC<{ isSignUpSubmitBlocked: boolean }> = ({
  isSignUpSubmitBlocked,
}) => (
  <ButtonWrapper>
    <Button type="submit" disabled={isSignUpSubmitBlocked}>
      {microCopies.signInSubmit}
    </Button>
  </ButtonWrapper>
)
