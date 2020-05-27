import {hexFilter} from '@libs/helpers/utils/hex-filter'
import {PRIMARY_BLUE} from '@libs/constants/colors'
import Image from '@libs/elements/image/Image/image.element'
import styled from 'styled-components'

export const BlueImageIcon = styled(Image)`
filter: ${hexFilter(PRIMARY_BLUE)}
`
