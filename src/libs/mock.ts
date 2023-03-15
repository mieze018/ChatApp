import type { chatType } from '@/src/types/firebaseDB'

import { timestampToRelativeDate } from '@/src/libs/formatTIme'

export const mockUser = {
  displayName: 'モックユーザー',
  uid: 'mockUser',
  photoURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nOXSzyqEURjH8Q9xARakXIHsJ8otWNixV/7UZMuCJsWsrWYv1hbchVnLBUhqsFOjMHrrTL3xDvOMdxbyq2d1fuf7recc/luOcDgs+AI6aeaHITjLCU7Lhk+hnRO8YLpMwX4O3p29suBjuC0Q3GE8AprBKqo4QAPnaBbAu9NMnUa6U02MjPUlN9+AOsG5LhLUSxTUe61pG2+/AL+j9tNbLON5AHgbK/0+eAX3AfgDFgWzFBBk3XB2A4KdQQSXAcFFFD6Cx4DgCaMRwVwBpIW1NK2C8+xO39n49LdPMJk7n8AxXnO99YhgK126Sl+2Vyqpk3U3I4Jsn7N97jXS/YP5AB/luaLoTDvsAAAAAElFTkSuQmCC',
}
const mockUser2 = {
  displayName: 'モックユーザー2',
  uid: 'mockUser2',
  photoURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nOXSzyqEURjH8Q9xARakXIHsJ8otWNixV/7UZMuCJsWsrWYv1hbchVnLBUhqsFOjMHrrTL3xDvOMdxbyq2d1fuf7recc/luOcDgs+AI6aeaHITjLCU7Lhk+hnRO8YLpMwX4O3p29suBjuC0Q3GE8AprBKqo4QAPnaBbAu9NMnUa6U02MjPUlN9+AOsG5LhLUSxTUe61pG2+/AL+j9tNbLON5AHgbK/0+eAX3AfgDFgWzFBBk3XB2A4KdQQSXAcFFFD6Cx4DgCaMRwVwBpIW1NK2C8+xO39n49LdPMJk7n8AxXnO99YhgK126Sl+2Vyqpk3U3I4Jsn7N97jXS/YP5AB/luaLoTDvsAAAAAElFTkSuQmCC',
}
const mockUser3 = {
  displayName:
    'モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3モックユーザー3',
  uid: 'mockUser3',
  photoURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nOXSzyqEURjH8Q9xARakXIHsJ8otWNixV/7UZMuCJsWsrWYv1hbchVnLBUhqsFOjMHrrTL3xDvOMdxbyq2d1fuf7recc/luOcDgs+AI6aeaHITjLCU7Lhk+hnRO8YLpMwX4O3p29suBjuC0Q3GE8AprBKqo4QAPnaBbAu9NMnUa6U02MjPUlN9+AOsG5LhLUSxTUe61pG2+/AL+j9tNbLON5AHgbK/0+eAX3AfgDFgWzFBBk3XB2A4KdQQSXAcFFFD6Cx4DgCaMRwVwBpIW1NK2C8+xO39n49LdPMJk7n8AxXnO99YhgK126Sl+2Vyqpk3U3I4Jsn7N97jXS/YP5AB/luaLoTDvsAAAAAElFTkSuQmCC',
}

export const mockSentenceLongEnglish =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const mockTimeStamp = timestampToRelativeDate('2023-03-15T16:16:04.755Z')

export const mockChats: chatType[] = [
  {
    message: 'こんにちは',
    createdAt: mockTimeStamp,
    user: mockUser,
  },
  {
    message: 'はじめまして',
    createdAt: mockTimeStamp,
    user: mockUser2,
  },
  {
    message: mockSentenceLongEnglish,
    createdAt: mockTimeStamp,
    user: mockUser3,
  },
  {
    message: 'こんばんは',
    createdAt: mockTimeStamp,
    user: mockUser,
  },
  {
    message: 'Hi.',
    createdAt: mockTimeStamp,
    user: mockUser3,
  },
  {
    message:
      'そらその男は立って、その前にしょんぼりひとりの子供が立って、鷺のちぢめて降りて来る黒い脚を両手で押えるようにしてください青年がみんなに言いました。ぼくはどうしてわたしはわたしのからだをおつかいください。僕はほんとうにびっくりしたようになって、その谷の底には川が明るく下にのぞけたのです。町かどを曲がるとき、ふりかえって見ましたら、たったいまの鳥捕りがきのどくでたまらなくなりました。車掌はちょっと見て、まるで億万の蛍烏賊の火を一ぺんにまっくらになったわ、……それから彗星がギーギーフーギーギーフーて言って来たのでした。.',

    createdAt: mockTimeStamp,
    user: mockUser2,
  },
  {
    message:
      '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',

    createdAt: mockTimeStamp,
    user: mockUser2,
  },
  {
    message: '😄👀👃𠀋𧚄𪗱𪘚𪘂𩊠𩒐𨩱㌶Ⅲ⑳㏾㈱髙﨑ヲンヰヱヴーヾ・ｧｰｭｿﾏﾞﾟ',

    createdAt: mockTimeStamp,
    user: mockUser,
  },
]
