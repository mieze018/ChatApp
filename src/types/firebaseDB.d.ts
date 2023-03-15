/**  ログインしているユーザーの情報 */
export type authUserType = {
  uid: string
  displayName: string
  photoURL: string
}
/** 1チャットの情報 */
export type chatType = {
  id?: string
  message: string
  user: authUserType
  createdAt?: firebase.firestore.Timestamp
}
