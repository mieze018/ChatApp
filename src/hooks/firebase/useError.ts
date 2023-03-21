import { useAtom } from 'jotai'

import { errorAtom } from '@/src/libs/states'

export const useError = () => {
  const [error, setError] = useAtom(errorAtom)
  return { error, setError }
}
export type useErrorType = ReturnType<typeof useError>
