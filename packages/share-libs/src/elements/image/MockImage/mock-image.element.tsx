import React from 'react'
import {Greys} from '../../../constants/colors'
import Image from '../Image/image.element'

export const MockImage = ({width, height, imageSize}) => {
    return (
        <div style={{
            width: width,
            height: height,
            backgroundColor: Greys.GREY02,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            flex: `0 0 ${width}px`
        }}>
            <Image src={'static/images/image-icon.png'} width={imageSize} height={imageSize}/>
        </div>
    )
}