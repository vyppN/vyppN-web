import {SHADOW_COLOR, colorMap} from '@libs/constants/colors'
import Background from '@libs/elements/background/background.element'
import {BackgroundStyle} from '@libs/elements/background/background.styles'
import Button from '@libs/elements/buttons/Button/button.element'
import {White, Grey08} from '@libs/elements/colors/Color/colors.element'
import Hover from '@libs/elements/hover/hover.element'
import {Padding} from '@libs/elements/spacing/Padding/padding.element'
import React from 'react'

interface ColoredButtonCompoundProps {
    title: string
    onClick: () => void
    secondary?: boolean
    color?: string
}


const renderButton = (secondary, title, color) => {
    if (secondary)
        return (
            <Background hexE5E5EA>
                <Padding padding={'6 24'}>
                    <Grey08>
                        <span style={{fontSize: 14}}>{title}</span>
                    </Grey08>
                </Padding>
            </Background>
        )
    else
        return (
            <BackgroundStyle backgroundColor={colorMap[color || 'blue']}>
                <Padding padding={'6 24'}>
                    <White>
                        <span style={{fontSize: 14}}>{title}</span>
                    </White>
                </Padding>
            </BackgroundStyle>
        )
}


export const ColoredButton = ({title, onClick, color, secondary, ...other}: ColoredButtonCompoundProps | any) => {
    return (
        <Hover brightness={105}>
            <Button
                style={{borderRadius: 4, overflow: 'hidden', boxShadow: `0 2px 6px ${SHADOW_COLOR}`, ...other.style}}
                onClick={onClick}
            >
                {renderButton(secondary, title, color)}
            </Button>
        </Hover>
    )
}
