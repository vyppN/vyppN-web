import {BackgroundStyle} from '@libs/elements/background/background.styles'
import SmallButton from '@libs/elements/buttons/SmallButton/small-button.element'
import Color from '@libs/elements/colors/Color/color.element'
import {Large} from '@libs/elements/paragraphs/body/large.element'
import {Medium} from '@libs/elements/paragraphs/body/medium.element'
import {Small} from '@libs/elements/paragraphs/body/small.element'
import {XSmall} from '@libs/elements/paragraphs/body/x-small.element'
import {Padding} from '@libs/elements/spacing/Padding/padding.element'
import React from 'react'

type LableSize = 'xsmall' | 'small' | 'normal' | 'large'

interface LabelElementProps {
    title: string
    color: string
    backgroundColor: string
    padding?: string | number
    height?: number
    size?: LableSize
    center?: boolean
}

const renderText = (color: string, title: string, size: LableSize = 'xsmall'): JSX.Element => {
    switch (size) {
        case 'xsmall':
            return <XSmall><Color color={color}>{title}</Color></XSmall>
        case 'small':
            return <Small><Color color={color}>{title}</Color></Small>
        case 'normal':
            return <Medium><Color color={color}>{title}</Color></Medium>
        case 'large':
            return <Large><Color color={color}>{title}</Color></Large>
    }
}

const Label = ({title, color, backgroundColor, padding, height, size, center, ...other}: LabelElementProps | any) => {
    return (
        <SmallButton height={height || 16} {...other}>
            <BackgroundStyle backgroundColor={backgroundColor}>
                <Padding padding={padding || '1 8'}
                         style={center ? {justifyContent: 'center', alignItems: 'center'} : null}>
                    {renderText(color, title, size)}
                </Padding>
            </BackgroundStyle>
        </SmallButton>
    )
}

export default Label
