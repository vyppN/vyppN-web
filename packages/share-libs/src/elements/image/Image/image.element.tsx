import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
display: block;
object-fit: cover;
`

const Image = ({...props}) => {

    const onError = event => {
        event.target.onerror = null
        event.target.src = props.errorImage
    }

    return <ImageStyle src={props.source} {...props} onError={onError}/>
}

export default Image
