import styled from 'styled-components'
import tw from 'twin.macro'

export const InputFile = styled.input.attrs({ type: 'file' })`
  ${tw`w-full text-sm cursor-pointer `}
  ${tw`file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-secondary-dark file:cursor-pointer`}
`
