import {colorMap} from '@libs/constants/colors'
import React from 'react'
import {BackgroundStyle} from './background.styles'

const returnHexStyle = (key, props) => {
    const hex = `#${key.replace('hex', '')}`
    return <BackgroundStyle backgroundColor={hex}>{props.children}</BackgroundStyle>
}

const Background = (props) => {
    if (Object.keys(props).length > 2) throw new Error('Background: only 2 property is limited.\nIt accept only `color` and `children`')

    const key = Object.keys(props)[0]
    const color = colorMap[key]

    if (key.substr(0, 3) === 'hex') return returnHexStyle(key, props)

    if (!color) return <BackgroundStyle backgroundColor={key}>{props.children}</BackgroundStyle>
    return <BackgroundStyle backgroundColor={color}>{props.children}</BackgroundStyle>
}


export default Background
