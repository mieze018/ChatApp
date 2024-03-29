import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export const Button = styled.button(({ variant = 'primary', size = 'medium' }: ButtonProps) => [
  variant === 'primary' && tw`text-white bg-primary`,
  variant === 'secondary' && tw`text-gray-800 bg-gray-100`,
  size === 'small' && tw`px-2 py-1 text-sm`,
  size === 'medium' && tw`px-4 py-2 text-base`,
  size === 'large' && tw`px-6 py-3 text-lg`,
  tw`flex items-center justify-center border border-transparent rounded-md cursor-pointer whitespace-nowrap`,
  tw`transition-all`,
  tw`focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`,
  tw`hover:bg-opacity-75 active:scale-95`,
  tw`disabled:text-gray-400 disabled:bg-gray-300 disabled:cursor-default disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100`,
])
