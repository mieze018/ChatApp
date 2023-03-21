import { atom } from 'jotai'

import type { authUserType, chatType, errorType } from '@/src/types/firebaseDB'
import type { FormEvent } from 'react'

/** 認証済みのユーザー情報 */
export const userAtom = atom<authUserType>(undefined)

export const isAuthLoadingAtom = atom(false)
/** 入力中のユーザー名 */
export const displayNameAtom = atom('')
/** 入力中の画像ファイル*/
export const imageFileAtom = atom<File | undefined>(undefined)
/** エラーメッセージ */
export const errorAtom = atom<errorType>(null)
/**画像アップロードの進捗 */
export const progressAtom = atom<number | undefined>(undefined)
/** アップロード後の画像URL */
export const downloadURLAtom = atom<string | undefined>(undefined)
/** サインアップの送信 */
export const handleSignUpAtom = atom<(e: FormEvent<HTMLFormElement>) => Promise<void>>(() =>
  Promise.resolve()
)
/** チャットメッセージリスト */
export const chatsAtom = atom<chatType[] | undefined>(undefined)
/** チャットがまだ一件も投稿されていない */
export const isBlankAtom = atom(false)
/** 入力中のメッセージ */
export const messageAtom = atom('')
/** チャットのローディング状態 */
export const isLoadingChatsAtom = atom(false)
/** チャットの送信 */
export const handleSendMessageAtom = atom<(e: FormEvent<HTMLFormElement>) => Promise<void>>(() =>
  Promise.resolve()
)
/** ログアウト(アカウントの削除) */
export const deleteAccountAtom = atom<() => void>(() => null)
