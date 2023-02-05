import tw from 'twin.macro'

import type { CSSProp } from 'styled-components'

import ChevronDown from '@/public/icons/chevron-down.svg'
import ChevronLeft from '@/public/icons/chevron-left.svg'
import ChevronRight from '@/public/icons/chevron-right.svg'
import ChevronUp from '@/public/icons/chevron-up.svg'

export const Icon = ({
  name,
  addCss,
}: {
  name: // common
  | 'ChevronDown'
    | 'ChevronUp'
    | 'ChevronLeft'
    | 'ChevronRight'
    //symbols
    | 'Camera'
    | 'Scene'
    | 'Animation'
    | 'Asset'
    | 'Light'
    | 'Grid'
  addCss?: CSSProp
}) => {
  const defaultStyle = tw`w-6 h-6 stroke-2 stroke-white`
  const style = [defaultStyle, addCss]
  return (
    <>
      {/* common */}
      {name === 'ChevronDown' && <ChevronDown css={style} />}
      {name === 'ChevronUp' && <ChevronUp css={style} />}
      {name === 'ChevronLeft' && <ChevronLeft css={style} />}
      {name === 'ChevronRight' && <ChevronRight css={style} />}
    </>
  )
}
