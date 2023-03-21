/**  ログインしているユーザーの情報 */
export type authUserDisplayableType = {
  uid: string
  displayName: string
  photoURL: string
}
/**  ログインしているユーザーの情報 */
export type authUserType = authUserDisplayableType | null | undefined
/** 1チャットの情報 */
export type chatType = {
  id?: string
  message: string | null
  user: authUserDisplayableType
  createdAt: string
}
/** エラーの情報 */
export type errorDisplayableType = {
  code?: string
  message: string
}
export type errorType = errorDisplayableType | null
