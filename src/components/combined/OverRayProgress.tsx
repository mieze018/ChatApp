import tw, { styled } from 'twin.macro'

const OverRay = tw.div`absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 gap-x-2`
const Progress = tw.div`absolute top-0 left-0 z-40 h-1 max-w-full min-w-0 transition-all duration-200 bg-primary`
const Spinner = styled.div.attrs({ role: 'status' })`
  ${tw`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
`
const Substitute = tw.span`!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]`

export const OverRayProgress: React.FC<{ progressPercentage?: number | undefined }> = ({
  progressPercentage,
}) => {
  return (
    <OverRay>
      {progressPercentage && (
        <Progress role="progressbar" css={{ width: `${progressPercentage}%` }} />
      )}
      <Spinner>
        <Substitute>Loading...</Substitute>
      </Spinner>
    </OverRay>
  )
}
