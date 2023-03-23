import { atom } from 'jotai'

import type { FormEvent } from 'react'

/**  ログインしているユーザーの情報 */
export type authUserType = {
  uid: string
  displayName: string
  photoURL: string
}
export const userAtom = atom<authUserType | null | undefined>(undefined)
export const isAuthLoadingAtom = atom(false)
/** 入力中のユーザー名 */
export const displayNameAtom = atom('')
/** 入力中の画像ファイル*/
export type imageFileType = File
export const imageFileAtom = atom<imageFileType | undefined>(undefined)
/** エラーの情報 */
export type errorType = {
  code?: string
  message: string
} | null
export const errorAtom = atom<errorType>(null)
/**画像アップロードの進捗 */
export type progressType = number
export const progressAtom = atom<progressType | undefined>(undefined)
/** アップロード後の画像URL */
export type downloadURLType = string
export const downloadURLAtom = atom<downloadURLType | undefined>(undefined)
/** サインアップの送信 */
export const handleSignUpAtom = atom<(e: FormEvent<HTMLFormElement>) => Promise<void>>(() =>
  Promise.resolve()
)
/** 1チャットの情報 */
export type chatType = {
  id?: string
  message: string
  user: authUserType
  createdAt: string
}
/** チャットメッセージリスト */
export const chatsAtom = atom<chatType[] | undefined>(undefined)

/** 入力中のメッセージ */
export type messageType = string
export const messageAtom = atom<messageType>('')
/** チャットのローディング状態 */
export type isLoadingChatsType = boolean
export const isLoadingChatsAtom = atom<isLoadingChatsType>(false)
/** チャットの送信 */
export type handleSendMessageType = (e: FormEvent<HTMLFormElement>) => Promise<void>
export const handleSendMessageAtom = atom<handleSendMessageType>(() => Promise.resolve())
/** ログアウト(アカウントの削除) */
export type deleteAccountType = () => void
export const deleteAccountAtom = atom<deleteAccountType>(() => null)
