import styled from 'styled-components'

interface HoverElementProps {
    brightness: number
    pointer?:boolean
    scale?:number
}

const Hover = styled.div<HoverElementProps>`
:hover{
filter:brightness(${props => props.brightness}%);
cursor: ${props=> props.pointer? 'pointer' : 'defalut'};
transform: scale(${props=>props.scale || 1});
}
`

export default Hover
