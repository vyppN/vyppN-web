import {Greys} from '@libs/constants/colors'
import styled from 'styled-components'
import FontWeight from '@libs/enums/font-weight'

interface TextProps {
    fontSize?: number
}

const Text = styled.p<TextProps | any>`
padding: 0;
margin: 0;
font-size: ${props => `${props.fontSize}px` || '1em'};
font-style: normal;
font-weight: ${FontWeight.regular};
`

Text.displayName = 'Text'

export const TextBold = styled(Text)<TextProps | any>`
font-weight: ${FontWeight.bold} !important;
`
export default Text
