import { useState, useEffect } from 'react'

export const useFirebaseStorage = () => {
  const [storage, setStorage] = useState<firebase.storage.Storage>()
  useEffect(() => {
    if (!storage) {
      setStorage(firebase.storage())
    }
  }, [storage])
  return storage
}
