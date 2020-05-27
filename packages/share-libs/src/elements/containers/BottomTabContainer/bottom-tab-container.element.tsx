import VerticalSpace from '@libs/elements/spacing/Spacer/vertical/vertical'
import TopShadow from '@libs/elements/styles/shadows/TopShadow/top-shadow.element'
import React from 'react'
import styled from 'styled-components'

export const BottomContainerStyle = styled.div`
height: 55px;
width: 100vw;
position: fixed;
left: 0;
bottom: 0;
${TopShadow};
padding-bottom: 12px;
`

export const BottomContainer = ({children}) => (
    <>
        <VerticalSpace height={55}/>
        <BottomContainerStyle>
            {children}
        </BottomContainerStyle>
    </>
)
