import {Grey04, Orange, Yellow, Green} from '@libs/elements/colors/Color/colors.element'
import Column from '@libs/elements/containers/Column/column.element'
import Row from '@libs/elements/containers/Row/row.element'
import Hover from '@libs/elements/hover/hover.element'
import Image from '@libs/elements/image/Image/image.element'
import Large from '@libs/elements/paragraphs/body/large.element'
import Small from '@libs/elements/paragraphs/body/small.element'
import Jumbo from '@libs/elements/paragraphs/header/jumbo.element'
import HorizontalSpace from '@libs/elements/spacing/Spacer/horizontal/horizontal'
import VerticalSpace from '@libs/elements/spacing/Spacer/vertical/vertical'
import {ExtraLight} from '@libs/elements/styles/font-weight/extra-light.element'
import {Light} from '@libs/elements/styles/font-weight/light.element'
import {Thin} from '@libs/elements/styles/font-weight/thin.element'
import React from 'react'

const MenuItem = ({title}) => {
    return (
        <Hover brightness={120} pointer><Light><Grey04>{title}</Grey04></Light></Hover>
    )
}

const BottomImage = ({source, ...props}) => {
    return <Image source={`/static/images/${source}`} style={{height: 60, ...props.style}}/>
}

const HomeLayout = () => {
    return (
        <Column alignItems={'flex-start'} justifyContent={'center'}
                style={{width: '100%', height: '100vh', position: 'relative'}}>

            <Row alignItems={'center'} style={{width: 'auto', alignSelf: 'center'}}>
                <Image source={'/static/images/kanoon.png'} style={{zIndex: -1, height: 200}}/>
                <Column>
                    <Row>
                        <HorizontalSpace width={40}/>
                        <Large style={{alignSelf: 'flex-start', fontFamily: 'PT Mono', fontSize: '1.3em'}}>
                            <ExtraLight>
                                <Yellow>{'<vyppN '}</Yellow>
                                <Grey04>{'description={'}</Grey04>
                                <Green>'I<Orange>\'</Orange>m a full stack developer'</Green>
                                <Grey04>{'}'}</Grey04>
                                <Yellow>{'/>'}</Yellow>
                            </ExtraLight>
                        </Large>
                    </Row>
                    <Row>
                        <HorizontalSpace width={40}/>
                        <Jumbo style={{fontSize: '5.5em'}}>
                            <ExtraLight>Nattapol Chitinsiyanon</ExtraLight>
                        </Jumbo>
                    </Row>
                    <Row justifyContent={'flex-end'} style={{marginTop: -16}}>
                        <Small><Light><Orange>明智人</Orange></Light></Small>
                        <HorizontalSpace width={8}/>
                        <Grey04>|</Grey04>
                        <HorizontalSpace width={8}/>
                        <Small><Light><Orange>ナッタポン・シチンシヤノン</Orange></Light></Small>
                    </Row>
                    <VerticalSpace height={30}/>
                    <Row justifyContent={'space-evenly'}>
                        <MenuItem title={'ABOUT ME'}/>
                        <MenuItem title={'EDUCATION'}/>
                        <MenuItem title={'PORTFOLIO'}/>
                        <MenuItem title={'WORKS'}/>
                    </Row>
                </Column>
            </Row>
            <Row padding={'0 16'} justifyContent={'flex-end'} alignItems={'center'}
                 style={{position: 'absolute', bottom: 50}}>
                <BottomImage source={'circleci.png'}/>
                <HorizontalSpace width={32}/>
                <BottomImage source={'firebase.png'}/>
                <HorizontalSpace width={32}/>
                <BottomImage source={'next-js-logo.png'} style={{filter: 'invert(100%)'}}/>
                <HorizontalSpace width={32}/>
                <BottomImage source={'ts.png'} style={{filter: 'invert(100%)', height: 45}}/>
            </Row>
            <Row padding={'0 16'} justifyContent={'flex-end'} style={{position: 'absolute', bottom: 16}}>
                <Thin>&copy; 2020 by Nattapol Chitinsiyanon. All rights reserved.</Thin>
            </Row>
        </Column>
    )
}

export default HomeLayout
