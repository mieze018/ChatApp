import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export const Button = styled.button(({ variant = 'primary', size = 'medium' }: ButtonProps) => [
  variant === 'primary' && tw`text-white bg-primary`,
  variant === 'secondary' && tw`text-gray-dark`,
  size === 'small' && tw`px-2 py-1 text-sm`,
  size === 'medium' && tw`px-4 py-2 text-base`,
  size === 'large' && tw`px-6 py-3 text-lg`,
  tw`inline-block font-medium leading-none border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap`,
  tw`transition-all`,
  tw`hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`,
  tw`hover:scale-105 active:scale-95`,
  tw`disabled:bg-gray-lighter disabled:cursor-default disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100`,
])
