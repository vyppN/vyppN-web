import Text from '@libs/elements/paragraphs/body/text.element'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const XSmall = styled(Text)`
font-size: 0.65em;
`
XSmall.displayName = 'XSmall'
XSmall.propTypes = {
    color: PropTypes.string
}

export default XSmall
