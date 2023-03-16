import { keyframes } from 'styled-components'
import tw, { styled } from 'twin.macro'

const OverRay = tw.div`absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 gap-x-2 overflow-hidden w-full`
const Progress = tw.div`absolute top-0 left-0 z-40 h-1 max-w-full min-w-0 transition-all duration-200 bg-primary`
//プログレスの情報がない時のプログレスバーのアニメーションを定義
const loadingAnimation = keyframes`
  from {
    ${tw`left-0 w-0`}
  }
  to {
    ${tw`w-full left-full`}
  }
`
const Loading = styled(Progress)`
  animation: ${loadingAnimation} 1.5s ease-in-out infinite;
  animation-direction: alternate;
`

export const OverRayLoading: React.FC<{ progressPercentage?: number | undefined }> = ({
  progressPercentage,
}) => {
  return (
    <OverRay>
      {progressPercentage ? (
        <Progress role="progressbar" css={{ width: `${progressPercentage}%` }} />
      ) : (
        <Loading role="progressbar" css={{ width: '0%' }} />
      )}
    </OverRay>
  )
}
