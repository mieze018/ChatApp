import { useAtomValue } from 'jotai'

import { deleteAccountAtom } from '@/src/libs/states'

export const useSignOut = () => {
  const deleteAccount = useAtomValue(deleteAccountAtom)
  const onSignOut = deleteAccount
  return { onSignOut }
}
