import { atom } from 'jotai'

import type { chatType } from '@/src/types/firebaseDB'
import type { FirebaseError } from 'firebase/app'
import type { User } from 'firebase/auth'
import type { FormEvent } from 'react'

/** 認証済みのユーザー情報 */
export const userAtom = atom<Pick<User, 'displayName' | 'photoURL' | 'uid'> | null | undefined>(
  undefined
)

export const isAuthLoadingAtom = atom(false)
/** 入力中のユーザー名 */
export const displayNameAtom = atom('')
/** 入力中の画像ファイル*/
export const imageFileAtom = atom<File | undefined>(undefined)
/** エラーメッセージ */
export const errorAtom = atom<FirebaseError | null>(null)
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
export const isLoadingAtom = atom(false)
/** チャットの送信 */
export const handleSendMessageAtom = atom<(e: FormEvent<HTMLFormElement>) => Promise<void>>(() =>
  Promise.resolve()
)
/** ログアウト(アカウントの削除) */
export const deleteAccountAtom = atom<() => void>(() => null)
