import {Colors} from '@libs/constants/color-palette'
import Color from '@libs/elements/colors/Color/color.element'
import {Grey04, Yellow, Green, Orange} from '@libs/elements/colors/Color/colors.element'
import Row from '@libs/elements/containers/Row/row.element'
import Small from '@libs/elements/paragraphs/body/small.element'
import Text from '@libs/elements/paragraphs/body/text.element'
import XSmall from '@libs/elements/paragraphs/body/x-small.element'
import HorizontalSpace from '@libs/elements/spacing/Spacer/horizontal/horizontal'
import VerticalSpace from '@libs/elements/spacing/Spacer/vertical/vertical'
import {ExtraLight} from '@libs/elements/styles/font-weight/extra-light.element'
import {Light} from '@libs/elements/styles/font-weight/light.element'
import React from 'react'

const MyName = () => {
    return (
        <>
            <Row>
                <HorizontalSpace width={40}/>
                <Text style={{alignSelf: 'flex-start', fontFamily: 'PT Mono', fontSize: '1.1em'}}>
                    <ExtraLight>
                        <Yellow>{'<vyppN '}</Yellow>
                        <Grey04>{'description={'}</Grey04>
                        <Green>'I<Orange>\'</Orange>m a full stack developer'</Green>
                        <Grey04>{'}'}</Grey04>
                        <Yellow>{'/>'}</Yellow>
                    </ExtraLight>
                </Text>
            </Row>
            <VerticalSpace height={10}/>
            <Row>
                <HorizontalSpace width={40}/>
                <XSmall style={{fontFamily: 'PT Mono', whiteSpace: 'pre'}}>
                    {`
888888ba             dP     dP                              dP     a88888b. dP       oo   dP   oo                   oo                                              
88    \`8b            88     88                              88    d8'   \`88 88            88                                                                        
88     88 .d8888b. d8888P d8888P .d8888b. 88d888b. .d8888b. 88    88        88d888b. dP d8888P dP 88d888b. .d8888b. dP dP    dP .d8888b. 88d888b. .d8888b. 88d888b. 
88     88 88'  \`88   88     88   88'  \`88 88'  \`88 88'  \`88 88    88        88'  \`88 88   88   88 88'  \`88 Y8ooooo. 88 88    88 88'  \`88 88'  \`88 88'  \`88 88'  \`88 
88     88 88.  .88   88     88   88.  .88 88.  .88 88.  .88 88    Y8.   .88 88    88 88   88   88 88    88       88 88 88.  .88 88.  .88 88    88 88.  .88 88    88 
dP     dP \`88888P8   dP     dP   \`88888P8 88Y888P' \`88888P' dP     Y88888P' dP    dP dP   dP   dP dP    dP \`88888P' dP \`8888P88 \`88888P8 dP    dP \`88888P' dP    dP 
                                          88                                                                                .88                                     
                                          dP                                                                            d8888P`}
                </XSmall>
            </Row>
            <Row justifyContent={'flex-end'} style={{marginTop: -16}}>
                <Small><Light><Color color={Colors.Orange.orange_20}>明智人</Color></Light></Small>
                <HorizontalSpace width={8}/>
                <Grey04>|</Grey04>
                <HorizontalSpace width={8}/>
                <Small><Light><Color color={Colors.Orange.orange_20}>ナッタポン・シチンシヤノン</Color></Light></Small>
            </Row>
        </>
    )
}

export default MyName
