import styled from "styled-components";
import { CSSProperties } from "react";
import PropTypes from 'prop-types'

interface HorizontalSpaceProps {
  width: number;
}
const HorizontalSpace = styled.div<HorizontalSpaceProps>`
  height: 100%;
  width: ${(props: CSSProperties) => props.width||16}px;
  background-color: transparent;
`;
HorizontalSpace.displayName = 'HorizontalSpace'
HorizontalSpace.propTypes = {
  /** Height of vertical spacer */
  width:PropTypes.number
}
HorizontalSpace.defaultProps = {
  width:16
}
export default HorizontalSpace