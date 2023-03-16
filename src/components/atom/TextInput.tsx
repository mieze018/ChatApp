import tw, { styled } from 'twin.macro'

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${tw`w-full text-black border border-gray-800 rounded-md`}
  ${tw`focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
`
