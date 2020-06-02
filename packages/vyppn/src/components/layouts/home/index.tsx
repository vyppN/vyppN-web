import {Grey04} from '@libs/elements/colors/Color/colors.element'
import Column from '@libs/elements/containers/Column/column.element'
import Row from '@libs/elements/containers/Row/row.element'
import Hover from '@libs/elements/hover/hover.element'
import Image from '@libs/elements/image/Image/image.element'
import HorizontalSpace from '@libs/elements/spacing/Spacer/horizontal/horizontal'
import VerticalSpace from '@libs/elements/spacing/Spacer/vertical/vertical'
import {Light} from '@libs/elements/styles/font-weight/light.element'
import {Thin} from '@libs/elements/styles/font-weight/thin.element'
import React from 'react'
import MyName from '~/components/compounds/my-name'
import HomeMenu from '~/components/panels/home-menu'



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
                    <MyName/>
                    <VerticalSpace height={30}/>
                    <HomeMenu/>
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
