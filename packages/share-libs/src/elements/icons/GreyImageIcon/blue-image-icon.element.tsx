import {hexFilter} from '@libs/helpers/utils/hex-filter'
import {Greys} from '@libs/constants/colors'
import Image from '@libs/elements/image/Image/image.element'
import styled from 'styled-components'

export const GreyImageIcon = styled(Image)`
filter: ${hexFilter(Greys.GREY07)}
`
