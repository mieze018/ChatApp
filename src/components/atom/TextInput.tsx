import tw, { styled } from 'twin.macro'

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${tw`w-full text-black border rounded-md border-gray-dark`}
  ${tw`focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
`
