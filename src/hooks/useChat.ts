import { useAtomValue } from 'jotai'

import type { chatType } from '@/src/types/firebaseDB'

import { microCopies } from '@/src/libs/microCopies'
import { userAtom } from '@/src/libs/states'

export const useChat = (chat: chatType) => {
  const user = useAtomValue(userAtom)

  const { message, createdAt } = chat
  const { uid, displayName, photoURL } = chat.user || {}
  const isMyMessage = uid === user?.uid
  const displayNameOrDefaultName = displayName ?? microCopies.noName
  return {
    message,
    createdAt,
    displayName: displayNameOrDefaultName,
    photoURL: photoURL ?? '',
    isMyMessage,
  }
}
