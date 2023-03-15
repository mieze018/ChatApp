import tw, { styled } from 'twin.macro'

const Wrapper = tw.div`flex items-center justify-center`
const Spinner = styled.div.attrs({ role: 'status' })`
  ${tw`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
`
const Substitute = tw.span`!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]`

export const PageLoading = () => (
  <Wrapper>
    <Spinner>
      <Substitute>Loading...</Substitute>
    </Spinner>
  </Wrapper>
)
