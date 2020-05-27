import styled from 'styled-components'

interface BackgroundElementProps {
    backgroundColor: string
}

export const BackgroundStyle = styled.div<BackgroundElementProps>`
background-color: ${props => props.backgroundColor};
box-sizing: border-box;
height: 100%;
width: 100%;
display: flex;
flex:1;
`