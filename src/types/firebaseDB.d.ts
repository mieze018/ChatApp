/**  ログインしているユーザーの情報 */
export type authUserType =
  | {
      uid: string | null
      displayName: string | null
      photoURL: string | null
    }
  | null
  | undefined
/** 1チャットの情報 */
export type chatType = {
  id?: string
  message: string | null
  user: authUserType
  createdAt: string
}
