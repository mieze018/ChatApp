import { useAtomValue } from 'jotai'

import {
  displayNameAtom,
  imageFileAtom,
  isAuthLoadingAtom,
  isLoadingChatsAtom,
  progressAtom,
  userAtom,
} from '@/src/libs/states'

export const useIsLoading = () => {
  const user = useAtomValue(userAtom)
  const isAuthLoading = useAtomValue(isAuthLoadingAtom)
  const displayName = useAtomValue(displayNameAtom)
  const progress = useAtomValue(progressAtom)
  const imageFile = useAtomValue(imageFileAtom)
  const isLoadingChats = useAtomValue(isLoadingChatsAtom)

  const isInitLoading = isAuthLoading || user === undefined
  const isPhotoUploaded = !!(user && user.photoURL)
  const progressing = progress !== undefined && progress >= 0
  const isSignUpBlocked = !!(!displayName || !imageFile || progressing)
  const isPosting = progressing || isAuthLoading
  const isSignUpSubmitBlocked = !!(!displayName || !imageFile || progressing)

  return {
    isInitLoading,
    isPhotoUploaded,
    progressing,
    isSignUpBlocked,
    isPosting,
    isLoadingChats,
    isAuthLoading,
    isSignUpSubmitBlocked,
  }
}
