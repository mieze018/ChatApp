import tw, { styled } from 'twin.macro'

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${tw`w-full p-2 text-black border rounded-md border-gray-dark`}
  ${tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
`
