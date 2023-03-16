export const timestampToRelativeDate = (timestamp: string) => {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diff / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diff / (1000 * 60))
  const diffSeconds = Math.floor(diff / 1000)
  if (diffDays > 0) return `${diffDays}日前`
  if (diffHours > 0) return `${diffHours}時間前`
  if (diffMinutes > 0) return `${diffMinutes}分前`
  if (diffSeconds > 0) return `${diffSeconds}秒前`
  return 'たった今'
}
