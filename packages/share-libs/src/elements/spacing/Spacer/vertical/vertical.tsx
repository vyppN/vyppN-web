import styled from "styled-components";
import { CSSProperties } from "react";
import PropTypes from 'prop-types'
interface VerticalSpaceProps {
  height: number|string;
}
const VerticalSpace = styled.div<VerticalSpaceProps>`
  width: 100%;
  height: ${(props: CSSProperties) => props.height||16}px;
  background-color: transparent;
`;
VerticalSpace.displayName = 'VerticalSpace'
VerticalSpace.propTypes = {
  /** Height of vertical spacer */
  height:PropTypes.number
}
VerticalSpace.defaultProps = {
  height:16
}
export default VerticalSpace