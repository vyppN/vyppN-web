import styled from 'styled-components'

interface HoverElementProps {
    brightness: number
    pointer?:boolean
}

const Hover = styled.div<HoverElementProps>`
:hover{
filter:brightness(${props => props.brightness}%);
cursor: ${props=> props.pointer? 'pointer' : 'defalut'};
}
`

export default Hover
