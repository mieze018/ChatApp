import tw, { styled } from 'twin.macro'

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${tw`w-full p-2 text-black border rounded-md border-gray-dark`}
`
