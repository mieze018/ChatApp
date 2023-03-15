import { FirebaseError } from 'firebase/app'
import { getAuth, deleteUser } from 'firebase/auth'

import { useError } from '@/src/hooks/firebase/useError'

export const useAuthDelete = () => {
  const { error, setError } = useError()
  const deleteAccount = () => {
    const auth = getAuth()
    if (!auth.currentUser) return
    deleteUser(auth.currentUser)
      .then(function () {
        //削除が成功したときの処理
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          setError(e)
        }
      })
  }
  return { deleteAccount, error }
}
export type useAuthDeleteType = ReturnType<typeof useAuthDelete>
