import type { AppPropsType } from '@/src/pages/_app'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'

export default function Home({ isAuthLoading, user }: AppPropsType) {
  const { error, handleSignUp } = useSignUp()

  if (isAuthLoading || user) return <PageLoading />
  return (
    <form onSubmit={handleSignUp}>
      <div className="grid items-center max-w-screen-md m-auto border divide-y">
        <div>
          <label>ユーザー名</label>
          <input
            type="text"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>ユーザー画像</label>
          <input
            type="file"
            // onChange={(e) => setAvatar(e.target.files?.[0])}
          />
        </div>
        <div>
          {error && <div>{error.message}</div>}
          <button type="submit">登録</button>
        </div>
      </div>
    </form>
  )
}
