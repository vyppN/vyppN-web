import {Yellow} from '@libs/elements/colors/Color/colors.element'
import Column from '@libs/elements/containers/Column/column.element'
import Row from '@libs/elements/containers/Row/row.element'
import Large from '@libs/elements/paragraphs/body/large.element'
import Larger from '@libs/elements/paragraphs/body/larger.element'
import Medium from '@libs/elements/paragraphs/body/medium.element'
import Small from '@libs/elements/paragraphs/body/small.element'
import Text from '@libs/elements/paragraphs/body/text.element'
import XLarge from '@libs/elements/paragraphs/body/x-large.element'
import XSmall from '@libs/elements/paragraphs/body/x-small.element'
import Jumbo from '@libs/elements/paragraphs/header/jumbo.element'
import VerticalSpace from '@libs/elements/spacing/Spacer/vertical/vertical'
import {BlackBold} from '@libs/elements/styles/font-weight/black.element'
import {Bold} from '@libs/elements/styles/font-weight/bold.element'
import {ExtraBold} from '@libs/elements/styles/font-weight/extra-bold.element'
import {ExtraLight} from '@libs/elements/styles/font-weight/extra-light.element'
import {Light} from '@libs/elements/styles/font-weight/light.element'
import {MediumBold} from '@libs/elements/styles/font-weight/medium-bold.element'
import {SemiBold} from '@libs/elements/styles/font-weight/semi-bold.element'
import {Thin} from '@libs/elements/styles/font-weight/thin.element'
import React from 'react'

const ElementsView = () => {
    return (
        <Column padding={20}>
            <Row>
                <Column>
                    <Larger><Yellow>Paragraphs: </Yellow></Larger>
                    <VerticalSpace height={10}/>
                    <XLarge>Nattapol Chitinsiyanon</XLarge>
                    <Larger>Nattapol Chitinsiyanon</Larger>
                    <Large>Nattapol Chitinsiyanon</Large>
                    <Text>Nattapol Chitinsiyanon</Text>
                    <Medium>Nattapol Chitinsiyanon</Medium>
                    <Small>Nattapol Chitinsiyanon</Small>
                    <XSmall>Nattapol Chitinsiyanon</XSmall>
                </Column>
                <Column>
                    <Larger><Yellow>Font weight: </Yellow></Larger>
                    <VerticalSpace height={10}/>
                    <Jumbo><BlackBold>BlackBold</BlackBold></Jumbo>
                    <Jumbo><ExtraBold>ExtraBold</ExtraBold></Jumbo>
                    <Jumbo><Bold>Bold</Bold></Jumbo>
                    <Jumbo><SemiBold>SemiBold</SemiBold></Jumbo>
                    <Jumbo><MediumBold>MediumBold</MediumBold></Jumbo>
                    <Jumbo>Regular</Jumbo>
                    <Jumbo><Light>Light</Light></Jumbo>
                    <Jumbo><ExtraLight>ExtraLight</ExtraLight></Jumbo>
                    <Jumbo><Thin>Thin</Thin></Jumbo>
                </Column>
                <Column>

                </Column>
            </Row>
        </Column>
    )
}

export default ElementsView
