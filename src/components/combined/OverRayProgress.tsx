import tw from 'twin.macro'

const OverRay = tw.div`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 gap-x-2`
const Progress = tw.div`absolute top-0 left-0 z-40 h-1 max-w-full min-w-0 transition-all duration-200 bg-primary`

export const OverRayProgress: React.FC<{ progressPercentage: number | undefined }> = ({
  progressPercentage,
}) => {
  if (!progressPercentage) return <></>
  return (
    <OverRay>
      <Progress role="progressbar" css={{ width: `${progressPercentage}%` }} />
    </OverRay>
  )
}
